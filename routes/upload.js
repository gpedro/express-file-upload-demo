var express = require('express');
var fs = require('fs');
var router  = express.Router();

router.get('/', function(req,res){ res.redirect('/'); });
router.post('/', function(req, res) {

  if(req.files != undefined && req.files.csv) {

    var csv = req.files.csv;
    if(csv.extension == 'csv') {
      res.render('index', {message: 'Upload realizado com sucesso.'});
    } else {
      fs.unlink('./' + csv.path);
      res.render('index', {message: 'Apenas é permitido arquivos no formato CSV'});
    }
  }
});

module.exports = router;
