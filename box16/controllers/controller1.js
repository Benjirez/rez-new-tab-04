var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extend: false });

// dbu and dbpw must be defined as heroku config var
var dbcreds = {};
dbcreds.user = process.env.dbu;
dbcreds.pw = process.env.dbpw;

mongoose.connect(
  "mongodb+srv://" +
    dbcreds.user +
    ":" +
    dbcreds.pw +
    "@rezdb.9cpbm.mongodb.net/rezdb?retryWrites=true&w=majority"
);

var model_x1 = mongoose.model(
  "new_tab_04",
  mongoose.Schema({
    col_a: String,
    col_b: String,
    col_c: String,
    col_d: String,
    col_e: String,
    col_f: String,
    col_g: String,
    col_h: String,
    col_i: String,
    col_j: String,
  })
);

//var textOut2 = "";

module.exports = function (xsvr) {
  // x1
  xsvr.get("/x1", function (req, res) {
    //var data = model_x1.find({}, function (err, data) {
    // if (err) throw err;
    //console.log('into the shoot flyboy');
    //xsvr.locals.myData = data;
    //res.send("mad poo");
    //res.render("view_x1", { data: data });
    res.render("junk");
  });
  //});

  //create new todoModel with data from req.body, push to db, reload view
  xsvr.post("/x1", urlencodedParser, function (req, res) {
    var new_x1 = model_x1(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
      console.log(data);
    });
  });

  /*
  xsvr.delete("/x1:item", function (req, res) {
    //delete requested item from db
    var myItem = { item: req.params.item };
    console.log(myItem);
    model_x1.find({ _id: myItem.item }).remove(function (err, data) {
      if (err) throw err;
      res.json(data);
      console.log(myItem.item + " " + data);
      //});
    });
  });
*/

  xsvr.get("/", function (req, res) {
    res.send("SUP");
  });
};
