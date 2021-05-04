import datetime, flask, logging, requests, sqlite3, werkzeug


fsm = flask.Flask("__main__",  static_url_path='/static')


class ErrorHandler:
    @fsm.errorhandler(werkzeug.exceptions.NotFound)
    @fsm.errorhandler(werkzeug.exceptions.Forbidden)
    @fsm.errorhandler(werkzeug.exceptions.InternalServerError)
    @fsm.errorhandler(werkzeug.exceptions.BadRequest)
    @fsm.errorhandler(werkzeug.exceptions.ClientDisconnected)
    @fsm.errorhandler(werkzeug.exceptions.MethodNotAllowed)
    def error(e):
        logging.basicConfig(filename='logs/warning.log', level=logging.WARNING, format='%(asctime)s: %(message)s')
        logging.basicConfig(filename='logs/critical.log', level=logging.CRITICAL, format='%(asctime)s: %(message)s')
        return flask.render_template('error.html', title=e.name, errormsg=e), e.code


class Main:
    @fsm.route("/", methods=["POST", "GET"])
    def index(self=None):
        if flask.request.method == "GET":
            return flask.render_template("index.html", resultTable="")

        if flask.request.method == "POST":
            request = flask.request.form

            conn = sqlite3.connect('database/database.db')
            c = conn.cursor()

            c.execute("CREATE TABLE IF NOT EXISTS database("
                      "id INTEGER NOT NULL PRIMARY KEY, "
                      "first_name TEXT,"
                      "name TEXT,"
                      "sex  BOOLEAN,"
                      "typ TEXT,"
                      "time INTEGER,"
                      "date TEXT);")

            if request["action"] == "create":
                c.execute(f"INSERT INTO database (name, first_name , sex, typ, time, date ) "
                          f"VALUES ('{request['name']}', '{request['first_name']}', '{request['sex']}', "
                          f"        '{request['typ']}',  '{int(request['time'])}',       '{str(datetime.date.today())}');")

            elif request["action"] == "delete":
                c.execute(f"DELETE FROM database WHERE id={request['id']}")

            elif request["action"] == "edit":
                new_content = request["new_content"]
                if request["category"] == "Name":
                    category = "name"

                elif request["category"] == "Vorname":
                    category = "first_name"

                elif request["category"] == "Geschlecht":
                    category = "sex"

                    if new_content == "männlich":
                        new_content = True
                    elif request["new_content"] == "weiblich":
                        new_content = False
                    else:
                        return flask.render_template("error.html", errormsg=r'Error! Es sind nur "männlich" und "weiblich" bei Geschlecht erlaubt!')

                elif request["category"] == "Fahrtyp":
                    category = "typ"

                elif request["category"] == "Fahrzeit":
                    category = "time"

                elif request["category"] == "Datum":
                    category = "date"

                c.execute(f"UPDATE database SET {category} = ('{new_content}') WHERE id={request['id']};")

            elif request["action"] == "search":
                keyword = request["keyword"]

                if keyword == "":
                    return flask.render_template("error.html", errormsg="Error! Es muss mindestens ein Wort angegeben werden.")
                elif request["sex"] == "option2":
                    c.execute(f"SELECT * FROM database where (first_name LIKE '%{keyword}%' OR name LIKE '%{keyword}%') AND sex = 'True';")
                elif request["sex"] == "option3":
                    c.execute(f"SELECT * FROM database where (first_name LIKE '%{keyword}%' OR name LIKE '%{keyword}%') AND sex = 'False';")
                else:
                    c.execute(f"SELECT * FROM database where (first_name LIKE '%{keyword}%' OR name LIKE '%{keyword}%');")

                resultTable = ""
                data = c.fetchall()
                for row in data:
                    for element in row:
                        if element == "True":
                            element = "männlich"
                        elif element == "False":
                            element = "weiblich"

                        resultTable = resultTable + f"{str(element)};"

                return flask.render_template("index.html", resultTable=resultTable)

            else:
                return flask.render_template("error.html", errormsg="Error! Request failed!")

            conn.commit()
            return flask.render_template("index.html", resultTable="")

        else:
            return flask.render_template("index.html", resultTable="")


if __name__ == "__main__":
    fsm.run(debug=True, port=3000)
