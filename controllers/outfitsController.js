var express = require("express");
var path = require("path");
var router = express.Router();

// Import the model (outfit.js) to use its database functions.
var outfit = require("../models/outfit.js");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/defaultpage.html"));
});

// Create all our routes and set up logic within those routes where required.
// router.get("/data", function(req, res) {
//   outfit.all(function(data) {
//     res.json({ outfit: data });
//   });
// });

router.get("/fiats/:season/:occasion", function (req, res) {
  outfit.all2({
    season: req.body.season,
occasion: req.body.occasion
  }, (function (data) {
      res.json({ outfit: data });
      console.log("controller--" + { outfit: data })
      console.log(req.body.season +" , "+req.body.occasion)
    })
  )
});

router.get("/graburl", function (req, res) {
  outfit.all1(function (data) {

    res.json({ outfit: data });
  });
});


router.get("/data", function (req, res) {
  outfit.all([
    "color"
    // ,"season", "occasion"
  ], [
      req.body.color
      // , req.body.season, req.body.occasion

    ], (function (data) {
      res.json({ outfit: data });
    })
  )
});

router.post("/api/create", function (req, res) {
  outfit.create([
    "type", "color", "season", "occasion", "gender", "url"
  ], [
      req.body.type, req.body.color, req.body.season, req.body.occasion, req.body.gender, req.body.url

    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

// router.put("/api/outfits/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   outfit.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.delete("/api/outfits/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  outfit.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
