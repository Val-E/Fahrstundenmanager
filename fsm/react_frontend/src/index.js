import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <img class="figure-img img-fluid rounded d-inline-block align-top" id="navbarIcon" src="/static/images/logo.jpg" width="75" height="40" alt=""/>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <div class="nav-link" href="#">
                                    <h4 class="h4">- FSM - </h4>
                                    <h5 class="h5">Fahrstundenmanager</h5>
                                    <span class="sr-only">(current)</span>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <div class="nav-link" href="#">
                                    <button type="button" class="btn btn-dark" data-container="body" data-toggle="popover" data-placement="bottom"
                                            data-content="Meine Name ist Valentin Svet und ich bin f&uuml;r Fragen erreichbar &uuml;ber meine E-Mail: valentin.svet.12345@gmail.com">
                                        Autor
                                    </button>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <div class="nav-link" href="#">
                                    <button type="button" class="btn btn-dark" data-container="body" data-toggle="popover" data-placement="bottom"
                                            data-content="Ich &uuml;bernehme keine Haftung f&uuml;r m&ouml;gliche Sach- oder Personensch&auml;den, welche durch Fehlfunktionen in der Software entstehen k&ouml;nnen.">
                                        Rechtliche Hinweise
                                    </button>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <div class="nav-link" href="#">
                                    <button type="button" class="btn btn-dark" data-container="body" data-toggle="popover" data-placement="bottom"
                                            data-content="Ich habe keine Rechte am verwendeten Logo. Der gesamte Quellcode aber unterliegt der GNU Public Licencse.">
                                        Urheberrecht
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </nav>
            </div>
        );
    }
}

class Create extends React.Component {
    render() {
        return (
            <div>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="name" id="name"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="firstname" class="col-sm-2 col-form-label">Vorname</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="first_name" id="firstname"></input>
                    </div>
                </div>
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">Geschlecht</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="sex" id="male" value="True" checked></input>
                                <label class="form-check-label" for="male">
                                    M&auml;nnlich
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="sex" id="female" value="False"></input>
                                <label class="form-check-label" for="female">
                                    Weiblich
                                </label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <div class="form-group">
                        <label for="type">Fahrstundentyp</label>
                        <select class="form-control" id="type" name="typ">
                            <option>üst</option>
                            <option>Gf</option>
                            <option>a.g.o</option>
                            <option>AB</option>
                            <option>NF</option>
                            <option>ÜL</option>
                            <option>PF</option>
                        </select>
                    </div>
                    <br/>
                    <hr/>
                    <div class="form-group">
                        <label for="type">Fahrzeit in Minuten</label>
                        <select class="form-control" id="time" name="time">
                            <option>45</option>
                            <option>60</option>
                            <option>90</option>
                            <option>135</option>
                            <option>180</option>
                           <option>225</option>
                        </select>
                    </div>
                    <br/>
                </fieldset>
            </div>
        );
    }
}

class Delete extends React.Component {
    render() {
        return (
            <div class="row g-3">
                <div class="col-auto col-sm-2 col-form-label">
                    <label for="delete" class="visually-hidden">ID</label>
                </div>
                <div class="col-auto col-sm-5 col-form-label">
                    <input type="number" class="form-control" name="id" id="delete"></input>
                </div>
            </div>
        );
    }
}

class Edit extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-auto col-sm-2 col-form-label">
                        <label for="delete" class="visually-hidden">ID</label>
                    </div>
                    <div class="col-auto col-sm-5 col-form-label">
                        <input type="number" class="form-control" name="id" id="delete"></input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-auto col-sm-2 col-form-label">
                        <label for="delete" class="visually-hidden">Kategorie</label>
                    </div>
                    <div class="col-auto col-sm-5 col-form-label">
                        <select class="form-control" id="time" name="category">
                            <option>Name</option>
                            <option>Vorname</option>
                            <option>Geschlecht</option>
                            <option>Fahrtyp</option>
                            <option>Fahrzeit</option>
                            <option>Datum</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-auto col-sm-2 col-form-label">
                        <label for="new_content" class="visually-hidden">Neuer Inhalt</label>
                    </div>
                    <div class="col-auto col-sm-10 col-form-label">
                        <textarea class="form-control" aria-label="With textarea" name="new_content" id="new_content"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

class ResultTable extends React.Component {
    constructor(props) {
        super(props)
        this.tableBody = [];
        this.resultList = [];
    }

    generateTableBody() {
        this.table = [];
        this.tableBody = [];
        this.resultList = [];
        this.resultList = window.resultTable.split(";");

        for(let i = 0; i < (this.resultList.length/7)-1; i++) {
            this.tableBody.push(
                <tr>
                    <th scope="row"> {this.resultList[i*7]} </th>
                    <td class="col"> {this.resultList[i*7+1]} </td>
                    <td class="col"> {this.resultList[i*7+2]} </td>
                    <td class="col"> {this.resultList[i*7+3]} </td>
                    <td class="col"> {this.resultList[i*7+4]} </td>
                    <td class="col"> {this.resultList[i*7+5]} </td>
                    <td class="col"> {this.resultList[i*7+6]} </td>
                </tr>
            );
        }
        window.resultTable = "";
        return this.tableBody;
    }

    render() {
        if(window.resultTable === "") {return false}

        return (
            <div>
            <br/>
            <hr/>
            <br/>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Vorname</th>
                        <th scope="col">Geschlecht</th>
                        <th scope="col">Fahrtyp</th>
                        <th scope="col">Fahrdauer</th>
                        <th scope="col">Datum</th>
                    </tr>
                </thead>
                <tbody>
                {this.generateTableBody()}
                </tbody>
            </table>
            </div>
        );
    }
}

class Search extends React.Component {
    render() {
        return (
            <div>
                <div class="input-group">
                    <legend class="col-form-label col-sm-2 pt-0">Geschlecht</legend>
                    <div class="col-sm">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sex" id="all" value="option1" checked></input>
                            <label class="form-check-label" for="all">
                                Beides
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sex" id="male" value="option2"></input>
                            <label class="form-check-label" for="male">
                                M&auml;nnlich
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sex" id="female" value="option3"></input>
                            <label class="form-check-label" for="female">
                                Weiblich
                            </label>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Name/Vorame</span>
                        </div>
                        <input type="text" id="name" name="keyword" aria-label="keyword" class="form-control"></input>
                    </div>
                </div>
            </div>
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: "sampleModal",
            title: "sampleTitle",
            action: "sampleAction",
            buttonText: "sampleText"
        };

        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.search = this.search.bind(this);
    }

    create() {
        this.setState(state => ({
            modal: <Create />,
            title: "Eintrag anlegen",
            action: "create",
            buttonText: "Anlegen!"
        }));
    }

    delete() {
        this.setState(state => ({
            modal: <Delete />,
            title: "Eintrag entfernen",
            action: "delete",
            buttonText: ("Entfernen"),
        }));
    }

    edit() {
        this.setState(state => ({
            modal: <Edit />,
            title: "Eintrag bearbeiten",
            action: "edit",
            buttonText: 'Abschicken!'
        }));
    }

    search() {
        this.setState(state => ({
            modal: <Search />,
            title: "Eintrag suchen",
            action: "search",
            buttonText: "Suchen!"
        }));
    }

    content() {
        return (
            <div class="modal fade" id="modal" tabindex="-3" role="dialog" aria-labelledby="Modal" aria-hidden="false">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
                    <div id="modal-div" class="modal-content bg-light">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">
                                <p>
                                    {this.state.title}
                                </p>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form action="/" method="post" >
                            <div id="modal-content" class="modal-body">
                                <input type="hidden" class="form-control" name="action" id="action" value={this.state.action}></input>
                                {this.state.modal}
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">
                                    {this.state.buttonText}
                                </button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Schließen</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div class="container-fluid"  id="main">
                <main>
                    <center>
                        <h2 class="h2">
                            Herzlich Willkommen im Fahrstundenmanager
                            <br/>
                        </h2>
                        <button class="btn btn-danger" type="button" data-toggle="modal"  data-target="#modal" onClick={this.create}>
                                Neuer Eintrag
                        </button>
                        <button class="btn btn-dark" type="button" data-toggle="modal"  data-target="#modal" onClick={this.delete}>
                            Eintrag entferne
                        </button>
                        <button class="btn btn-success" type="button" data-toggle="modal"  data-target="#modal" onClick={this.edit}>
                            Eintrag bearbeiten
                        </button>
                        <button class="btn btn-warning" type="button" data-toggle="modal"  data-target="#modal" onClick={this.search}>
                            Eintrag Suchen
                        </button>
                        {this.content()}
                        <ResultTable />,
                    </center>
                </main>
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Header />,
        <Home />,

    </React.StrictMode>,
    document.getElementById('root')
);
