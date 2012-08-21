var Db = require('../lib/mongodb').Db,
  Connection = require('../lib/mongodb').Connection,
    Server = require('../lib/mongodb').Server;

var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : Connection.DEFAULT_PORT;

console.log("Connecting to " + host + ":" + port);

var db = new Db('cameo-development', new Server(host, port, {}), {native_parser:true});

db.open(function(err, db) {
    db.collection('full_scenes', function(err, collection) {
         collection.find(function(err, cursor) {
            cursor.each(function(err, doc) {
                if (doc[montage]) {
                    if (this[montage].montage_id == 389) {
                      console.dir(doc);
                    }
                }
            });
        });
    });
});

// .sort( { 'start' : 1 } )
// .forEach(printjson);
