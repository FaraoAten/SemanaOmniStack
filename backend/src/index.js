const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
    Rota / Recurso 
 */

 /*
    Métodos HTTP:

    GET: buscar/listar uma informação do Back-end
    POST: criar uma informação no Back-end
    PUT: alterar uma informação no Back-end
    DELETE: apagar uma informação do Back-end
 */

 /*
    Tipos de parâmetros:

    Query params: parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
    Route params: parânmetros utilizados para identificar recursos (1 único)
    Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

 /*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
 */

 /*
    Driver: SELET * FROM users
    Query Builder: table('users').select('*').where(...)
 */