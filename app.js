const express = require('express')

const PATH = "/home/a0793534/domains/chistosmiskas.ru/";

const app = express();

app.use(express.json());

app.use("/", express.static(PATH + "views/index"));

app.get('/', function (req, res) {
    res.sendFile(PATH + "htmls/index.html");
});

app.listen(3030);

