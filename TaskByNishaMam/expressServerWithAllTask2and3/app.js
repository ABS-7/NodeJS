const data = ['name', 'number1', 'number2', 'languages', 'dialects', 'phoneNumber'];

const express = require("express");
const dotenv = require('dotenv');
const match = require('./function/match');
// const bodyparser = require('body-parser')


const username = "Abhi";
const pwd = 'AK47';

dotenv.config();
const port = process.env.PORT;

const app = express();
// app.use(bodyparser.json());

app.use(express.json());

app.get('/api/v1', (req, res) => {
    res.send('welcome');
});

app.get('/api/v1/html', (req, res) => {
    res.sendFile(`C:/Other/viitor cloud/taskNode/task2_express_env_server/index.html`);
});

app.post('/api/v1/api3', (req, res) => {

    const result = match.match(data, req.body);
    if (result) {

        const n1 = req.body.number1 + '';
        const n2 = req.body.number2 + '';

        if (n1.length != n2.length) {
            res.send("error...");
            return;
        }

        let number = n1[0] + '' + n2[0];

        for (let i = 1; i < n1.length; i++) {
            number += '' + n1[i] * n2[i];
        }

        console.log(number);

        res.json({
            message: 'hi' + req.body.name,
            data: {
                languagesWithA: match.findA(req.body.languages),
                allLanguages: req.body.languages.concat(req.body.dialects),
                countryCode: req.body.phoneNumber.substring(0, req.body.phoneNumber.length - 10),
                phone: req.body.phoneNumber.substring(req.body.phoneNumber.length - 10, req.body.phoneNumber.length),
                number: number,
            },
            status: 'Success'
        });
    } else {
        res.status(422);
        res.json({
            message: "Required Fields Missing",
            data: match.missing(data, req.body),
            status: "Required Param Missing"
        });
    }
});

app.post('/api/v1/login', (req, res) => {

    if (req.body.username === username && req.body.pwd === pwd)
        res.send('login sucessfully...');
    else
        res.send("Enter valid username and password...");
});

app.listen(port, (err) => {
    if (err)
        console.log('error');
    else
        console.log(`Example app listening at http://localhost:${port}`);
});