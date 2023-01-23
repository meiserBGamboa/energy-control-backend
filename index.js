var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', function(req, res, next) {
	console.log('GET index');
    res.status(200).send({message:'Hola Server'})
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
});
  
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})