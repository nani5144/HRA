var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.send('respond with a resource');
  console.log('started');
});

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: 'HRA',
});




const put_data = async (data) => {
  try {
    
		var keys='(name,ph_no,house_name,house_type,rent,address,city,BHK,available_for,HRA_id)';
		var newdata="('"+data.name+"','"+data.ph_no+"','"+data.house_name+"','"+data.house_type+"','"+data.rent+"','"+data.address+"','"+data.city+"','"+data.BHK+"','"+data.available_for+"','"+data.HRA_id+"')";
		
	    var sql_new = "INSERT INTO owners "+keys+" VALUES "+newdata+";";
		console.log(sql_new);
		con.query(sql_new, function (err, result) {
			if (err){
				console.log(err);
				throw err;
			}
			console.log("1 record inserted");
		});
	}
	catch (error) {
	  console.log(error);
	}
};

router.post('/add_the_house', function(req, res, next) {
	//const url = "https://api.github.com/users/"+req.body.github;
	put_data(req.body);
  console.log("in add user");
	res.send("done");
});

router.get('/HRA_id/:HRA_id', function(req, res, next) {
	con.query("SELECT * FROM owners WHERE HRA_id='"+req.params.HRA_id+"'", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
  
});

router.get('/house_type/:house_type', function(req, res, next) {
	con.query("SELECT * FROM owners WHERE house_type='"+req.params.house_type+"'", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
  
});

router.get('/BHK/:BHK', function(req, res, next) {
	con.query("SELECT * FROM owners WHERE BHK='"+req.params.BHK+"'", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
  
});


router.get('/rent/:rent', function(req, res, next) {
	con.query("SELECT * FROM owners WHERE rent <='"+req.params.rent+"'", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
  
});

router.get('/available_for/:available_for', function(req, res, next) {
	con.query("SELECT * FROM owners WHERE available_for='"+req.params.available_for+"'", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
  
});


router.get('/city/:city', function(req, res, next) {
	con.query("SELECT * FROM owners WHERE city='"+req.params.city+"'", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
  
});

router.get('/', function(req, res, next) {
	con.query("SELECT * FROM owners", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		// console.log(result);
		res.send(result);
	});
  
});



module.exports = router;