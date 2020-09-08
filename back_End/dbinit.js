const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('counter3.db')
 
function database(count){
    db.serialize(function() {
        db.run("CREATE TABLE counter ( count VARCHAR(100))")
     
        db.prepare('INSERT INTO counter (count) VALUES (?)')
            .run(`${count}`)
    
    
    });
}

database("0")