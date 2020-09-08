const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('counter.db')
 
function database(namepm, categorypm){
    db.serialize(function() {
        db.run("CREATE TABLE counter ( count VARCHAR(100))")
     
        db.prepare('INSERT INTO products VALUES (?)')
            .run(`${namepm}`)
    
    
    });
}

database("0")