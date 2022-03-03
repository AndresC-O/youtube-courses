const express = require('express');
const morgan = require('morgan');
const app = express();

// function logger(req, res, next){
//     console.log('Request received');
//     console.log(`Route received ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

//Settings
app.set('appName', 'Fazt Express Tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');

//Middle Wards
app.use(express.json());
app.use(morgan('dev'));

//Routes
// app.all('/user', (req, res) =>{
//     console.log('Por aqui paso');
//     res.send('Finished');
// });

app.get('/', (req, res) => {
    const data = [{name: 'andres'}, {name: 'eduardo'}, {name: 'cordova'}];
    res.render('index.ejs', {people: data});
});

app.get('/user', (req, res) =>{
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    });
});

app.post('/newUser/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params);
    res.send('Post request has been received!');
});

app.put('/updateUser/:id', (req, res) =>{
    console.log(req.body)
    res.send(`User ${req.params.id} updated.`);
});

app.delete('/deleteUser/:id', (req, res) =>{
    res.send(`User ${req.params.id} deleted.`);
});

app.use(express.static('public'));

app.listen(app.get('port'), () =>{
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
});