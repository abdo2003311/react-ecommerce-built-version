const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));
app.get('/ping', function (req, res) {
    return res.send('ping');
});

app.get('/*.js', function (req, res) {

    res.sendFile(path.join(__dirname, '/dist', `/${req.path.indexOf('dist') > -1 ? req.path.slice(5, req.path.length) : req.path}`)); //serving build folder
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html')); //serving build folder
});
app.listen(port, () => {
    console.log('app started on server 8080');
});