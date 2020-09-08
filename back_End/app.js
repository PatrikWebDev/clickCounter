const express = require('express');
const exphbs  = require('express-handlebars');
 
const app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


 
app.get('/', function (req, res) {
    db.serialize(function() {
        db.all("SELECT count from counter", function(err, results) {
            if (err != null) {
                res.send("Missing from database")
            }
          res.render('home', {counter:results[results.length-1]})
            
        });
      });

});

app.post('/save', function (req,res){
    db.serialize(function() {
        db.all(`INSERT INTO counter (count) VALUES ("${req.body.counter}")`);
        db.all("SELECT count from counter", function(err, results) {
            if (err != null) {
                res.send("Missing from database")
            }
          res.render('home', {counter:results[results.length-1]})
        });
      });
})
 
app.listen(3000);