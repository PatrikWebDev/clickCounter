const express = require('express');
const exphbs  = require('express-handlebars');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('counter6.db')
 
const app = express();

app.use(express.urlencoded({
  extended: true
}))
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


 
app.get('/', function (req, res) {
    db.serialize(function() {
        db.all("SELECT count from counter", function(err, results) {
            if (err != null) {
                res.send("Missing from database")
            }
          res.render('home', {counter: results[results.length-1].count})
            
        });
      });

});

app.post('/save', function (req,res){
  console.log(req.body)
    db.serialize(function() {
        db.all(`INSERT INTO counter (count) VALUES (${req.body.counter})`);
        db.all("SELECT count from counter", function(err, results) {
            if (err != null) {
                res.send("Missing from database")
            }
          res.render('home', {counter: results[results.length-1].count})
        });
      });
})
 
app.listen(3000);