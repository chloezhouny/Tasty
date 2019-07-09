var express = require("express");

var router = express.Router();

var order = require("../models/tasty.js");


router.get("/", function(req, res) {
  order.selectAll(function(data) {
    var hbsObject = {
      orders: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});




router.post("/api/orders", function(req, res) {
  order.insertOne([
    "order_name", "prepared"
  ], [
    req.body.order_name, req.body.prepared
  ], function(result) {
   
    res.json({ id: result.insertId });
  });
});





router.put("/api/orders/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  order.updateOne({
    prepared: req.body.prepared
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
