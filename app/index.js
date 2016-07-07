'use strict';

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

module.exports = function(app) {

	app.route('/')
		.get(function (req, res) {
			res.render('index.html');
		})
	    .post(upload.single('file_ready_to_upload'), function(req, res, nxt){  
            res.json({ "size": req.file.size });
        });
	
};