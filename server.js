var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

//start mysql connection
var connection = mysql.createConnection({
  host: "localhost", //mysql database host name
  user: "root", //mysql database user name
  password: "", //mysql database password
  database: "xem_phim" //mysql database name
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are now connected...");
});
//end mysql connection

//start body-parser configuration
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
//end body-parser configuration

//create app server
var server = app.listen(5000, "127.0.0.1", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

// GET NGON NGU
app.get("/ngonngu", function(req, res) {
  connection.query("select * from ngonngu", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
// GET Link Phim
app.get("/linkphim", function(req, res) {
  connection.query("select * from linkphim", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
// POST LINK PHIM
app.post("/linkphim", function(req, res) {
  var postData = req.body;
  connection.query("INSERT INTO linkphim SET ?", postData, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(postData));
  });
});
// GET QUOC GIA
app.get("/quocgia", function(req, res) {
  connection.query("select * from quocgia", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
// GET THE LOAi
app.get("/theloai", function(req, res) {
  connection.query("select * from theloai", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//rest api to get a single employee data
app.get("/employees/:IDNgonNgu", function(req, res) {
  console.log(req);
  connection.query(
    "select * from ngonngu where IDNgonNgu=?",
    [req.params.IDNgonNgu, req.body.IDNgonNgu],
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// //rest api to create a new record into mysql database
app.post("/employees", function(req, res) {
  var postData = req.body;
  connection.query("INSERT INTO ngonngu SET ?", postData, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.put("/employees/:IDNgonNgu", function(req, res) {
  var qry =
    "update ngonngu set NgonNgu='" +
    req.body.NgonNgu +
    "' where IDNgonNgu=" +
    parseInt(req.params.IDNgonNgu);
  connection.query(qry, function(err, rows) {
    if (err) throw err;
    console.log("1 Row Updated.");
    res.send("1 Row Updated.");
  });
});
//rest api to delete record from mysql database
app.delete("/employees/:IDNgonNgu", function(req, res) {
  console.log(req.body);
  connection.query(
    "DELETE FROM `ngonngu` WHERE `IDNgonNgu`=?",
    [req.params.IDNgonNgu, req.body.IDNgonNgu],
    function(error, results, fields) {
      if (error) throw error;
      res.end("Record has been deleted!");
    }
  );
});
// ---------------THANH VIEN---------------
app.post("/login-user", function(req, dataresults) {
  const user = {
    IDThanhVien: req.body.IDThanhVien,
    Email: req.body.Email,
    MK: req.body.MK
  };
  var Email = req.body.Email;
  var MK = req.body.MK;
  connection.query("SELECT * FROM thanhvien WHERE Email = ?", [Email], function(
    error,
    respnose,
    fields
  ) {
    if (error) {
      dataresults.send({
        code: 400,
        failed: "Sorrey error ocurred!!"
      });
    } else {
      if (respnose.length > 0) {
        if (respnose[0].MK == MK) {
          jwt.sign({ user }, "secretkey", (err, token) => {
            dataresults.status(200).json({
              Token: token
            });
          });
        } else {
          dataresults.send({
            code: 204,
            success: "Sorry Email and password does not match"
          });
        }
      } else {
        dataresults.send({
          code: 204,
          success: "Sorry Email does not exits"
        });
      }
    }
  });
});
//----------------------------
app.get("/informations-user", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      var Email = data.user.Email;
      connection.query(
        "SELECT * FROM thanhvien WHERE Email = ?",
        [Email],
        function(error, results, fields) {
          if (error) throw error;
          //res.end(JSON.stringify(results));
          res.send(results);
        }
      );
    }
  });
});
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
//--------------registration--------------
app.post("/registration-user", function(req, res) {
  var postData = req.body;
  connection.query("INSERT INTO thanhvien SET ?", postData, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(postData));
  });
});

app.get("/user", function(req, res) {
  connection.query("select Email from thanhvien", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//--------------------------------Moveis--------------------------------
// get all
app.get("/movies", function(req, res) {
  connection.query("SELECT* FROM phim INNER JOIN quocgia On phim.IDQuocGia=quocgia.IDQuocGia INNER JOIN linkphim On phim.IDLinkPhim=linkphim.IDLinkPhim INNER JOIN ngonngu ON phim.IDNgonNgu=ngonngu.IDNgonNgu INNER JOIN theloai ON phim.IDTheLoai=theloai.IDTheLoai", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//get id moveis
app.get("/movies/:IDPhim", function(req, res) {
  console.log(req);
  connection.query(
    "SELECT phim.IDPhim,phim.TenPhim,phim.NgayRaRap,phim.TenDaoDien,phim.NoiDungPhim,phim.ThoiGian,phim.poster,phim.TraiLer,phim.NamSX,phim.DienVien,phim.DiemMDB,linkphim.IDLinkPhim,linkphim.DuongLink,ngonngu.IDNgonNgu,ngonngu.NgonNgu,quocgia.IDQuocGia,quocgia.TenQuocGia,theloai.IDTheLoai,theloai.TenTheLoai FROM phim INNER JOIN quocgia On phim.IDQuocGia=quocgia.IDQuocGia INNER JOIN linkphim On phim.IDLinkPhim=linkphim.IDLinkPhim INNER JOIN ngonngu ON phim.IDNgonNgu=ngonngu.IDNgonNgu INNER JOIN theloai ON phim.IDTheLoai=theloai.IDTheLoai where IDPhim=?",
    [req.params.IDPhim, req.body.IDPhim],
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
// update
app.put('/phim/:IDPhim', function (req, res) {
  connection.query('UPDATE `phim` SET `TenPhim`=?,`NgayRaRap`=?,`TenDaoDien`=? ,`NoiDungPhim`=?,`ThoiGian`=?,`poster`=?,`TraiLer`=?,`NamSX`=?,`DienVien`=?,`DiemMDB`=?,`IDQuocGia`=?,`IDLinkPhim`=?,`IDNgonNgu`=?,`IDTheLoai`=?  where `IDPhim`=?', [req.body.TenPhim,req.body.NgayRaRap,req.body.TenDaoDien,req.body.NoiDungPhim,req.body.ThoiGian,req.body.poster,req.body.TraiLer,req.body.NamSX,req.body.DienVien,req.body.DiemMDB,req.body.IDQuocGia,req.body.IDLinkPhim,req.body.IDNgonNgu,req.body.IDTheLoai,req.body.IDPhim], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
// delete moveis
app.delete("/movies/:IDPhim", function(req, res) {
  console.log(req.body);
  connection.query(
    "DELETE FROM `phim` WHERE `IDPhim`=?",
    [req.params.IDPhim, req.body.IDPhim],
    function(error, results, fields) {
      if (error) throw error;
      res.end("Record has been deleted!");
    }
  );
});
app.post("/registration-movies", function(req, res) {
  var postData = req.body;
  connection.query("INSERT INTO phim SET ?", postData, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(postData));
  });
});
// app.get("/movies/:IDPhim", function(req, res) {
//   connection.query("SELECT phim.IDPhim,phim.TenPhim,phim.NgayRaRap,phim.TenDaoDien,phim.NoiDungPhim,phim.ThoiGian,phim.poster,phim.TraiLer,phim.NamSX,phim.DienVien,phim.DiemMDB,linkphim.IDLinkPhim,linkphim.DuongLink,ngonngu.IDNgonNgu,ngonngu.NgonNgu,quocgia.IDQuocGia,quocgia.TenQuocGia,theloai.IDTheLoai,theloai.TenTheLoai FROM phim INNER JOIN quocgia On phim.IDQuocGia=quocgia.IDQuocGia INNER JOIN linkphim On phim.IDLinkPhim=linkphim.IDLinkPhim INNER JOIN ngonngu ON phim.IDNgonNgu=ngonngu.IDNgonNgu INNER JOIN theloai ON phim.IDTheLoai=theloai.IDTheLoai  WHERE IDPhim=?", function(error, results, fields) {
//     if (error) throw error;
//     res.end(JSON.stringify(results));
//   });
// });
// ----------------------------Comment----------------------------

app.get("/comment/:IDPhim", function(req, res) {
  connection.query(
    "SELECT* FROM comment INNER JOIN phim On comment.IDPhim=phim.IDPhim INNER JOIN thanhvien On comment.IDThanhVien=thanhvien.IDThanhVien WHERE comment.IDPhim= ?", [req.params.IDPhim, req.body.IDPhim],
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
//


app.get("/comment", function(req, res) {
  connection.query("select * FROM comment INNER JOIN phim On comment.IDPhim=phim.IDPhim INNER JOIN thanhvien On comment.IDThanhVien=thanhvien.IDThanhVien", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
//
app.delete("/comment/:IDPhim", function(req, res) {
  console.log(req.body);
  connection.query(
    "DELETE FROM `comment` WHERE `IDPhim`=?",
    [req.params.IDPhim, req.body.IDPhim],
    function(error, results, fields) {
      if (error) throw error;
      res.end("Record has been deleted!");
    }
  );
});

app.post("/comment", function(req, res) {
  var postData = req.body;
  connection.query("INSERT INTO comment SET ?", postData, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(postData));
  });
});

app.put("/comment/:IDcomment/:IDThanhVien", function(req, res) {
  var qry =
    "update comment set NoiDung='" +req.body.NoiDung +"' where IDcomment='"+parseInt(req.params.IDcomment)+"' and IDThanhVien='"+req.body.IDThanhVien+"' ";
  connection.query(qry, function(err, rows) {
    if (err) throw err;
    console.log("1 Row Updated.");
    res.send("1 Row Updated.");
  });
});



app.delete("/comment/:IDcomment/:IDThanhVien", function(req, res) {
  var qry =
    "DELETE FROM comment  where IDcomment='"+parseInt(req.params.IDcomment)+"' and IDThanhVien='"+req.body.IDThanhVien+"' ";
  connection.query(qry, function(err, rows) {
    if (err) throw err;
    console.log("1 Row Updated.");
    res.send("1 Row Updated.");
  });
});
// --------------admin
app.get("/admin", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      var Email = data.user.Email;
      connection.query(
        "SELECT * FROM admin WHERE Email = ?",
        [Email],
        function(error, results, fields) {
          if (error) throw error;
          //res.end(JSON.stringify(results));
          res.send(results);
        }
      );
    }
  });
});
// login admin
app.post("/login-admin", function(req, dataresults) {
  const user = {
    Email: req.body.Email,
    MK: req.body.MK
  };
  var Email = req.body.Email;
  var MK = req.body.MK;
  connection.query("SELECT * FROM admin WHERE Email = ?", [Email], function(
    error,
    respnose,
    fields
  ) {
    if (error) {
      dataresults.send({
        code: 400,
        failed: "Sorrey error ocurred!!"
      });
    } else {
      if (respnose.length > 0) {
        if (respnose[0].MK == MK) {
          jwt.sign({ user }, "secretkey", (err, token) => {
            dataresults.status(200).json({
              Token: token
            });
          });
        } else {
          dataresults.send({
            code: 204,
            success: "Sorry Email and password does not match"
          });
        }
      } else {
        dataresults.send({
          code: 204,
          success: "Sorry Email does not exits"
        });
      }
    }
  });
});
app.get("/informations-admin", function(req, res) {
  connection.query("select Email from admin", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

// Quảng Cáo
app.get("/advertisement/:IDPhim", function(req, res) {
  connection.query(
    "SELECT* FROM advertisement INNER JOIN phim On advertisement.IDPhim=phim.IDPhim INNER JOIN thanhvien On advertisement.IDThanhVien=thanhvien.IDThanhVien WHERE advertisement.IDPhim= ?", [req.params.IDPhim, req.body.IDPhim],
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
// get user quang cao
app.get("/advertisement-user/:IDThanhVien", function(req, res) {
  connection.query(
    "SELECT* FROM advertisement INNER JOIN phim On advertisement.IDPhim=phim.IDPhim INNER JOIN thanhvien On advertisement.IDThanhVien=thanhvien.IDThanhVien WHERE advertisement.IDThanhVien= ?", [req.params.IDThanhVien, req.body.IDThanhVien],
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
// post  Quảng Cáo
app.post("/advertisement", function(req, res) {
  var postData = req.body;
  connection.query("INSERT INTO advertisement SET ?", postData, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(postData));
  });
});

// get all Quảng Cáo
app.get("/advertisement", function(req, res) {
  connection.query("select * FROM advertisement INNER JOIN phim On advertisement.IDPhim=phim.IDPhim INNER JOIN thanhvien On advertisement.IDThanhVien=thanhvien.IDThanhVien", function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
// put quang cao
app.put("/advertisement/:IDadvertisement/:IDThanhVien", function(req, res) {
  var qry =
    "update advertisement set Stusus='" +req.body.Stusus +"' where IDadvertisement='"+parseInt(req.params.IDadvertisement)+"' and IDThanhVien='"+req.body.IDThanhVien+"' ";
  connection.query(qry, function(err, rows) {
    if (err) throw err;
    console.log("1 Row Updated.");
    res.send("1 Row Updated.");
  });
});

