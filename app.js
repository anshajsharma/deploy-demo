
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));
app.set("view engine" , "ejs");  // After writing this line we do not have to write .ejs
                                 // during rendering

app.get('/user/:id', function (req, res) {
   // console.log(req.params);
    var id = req.params.id;
    // console.log(id);
    // res.render('user.ejs',{ID:id})       // If line 6 is absent
    res.render('user',{ID:id})
  })

  var Posts = [
    {title: "ABC",author: "CDGS"},
    {title: "DCCDS",author:"SDF"},
    {title: "VDFFVD",author:"VDFSV"},
    {title: "WGRSSFSD",author:"CVASFZD"},
    {title: "CSADC",author:"CDEADV"}
  ];

  app.get('/', function (req, res) {
    res.render('home')
  })
  app.get('/home', function (req, res) {
    res.render('home')
  })

  app.get('/pharmacistlogin', function (req, res) {
    res.render('pharmacistlogin')
  })
  app.get('/doctorlogin', function (req, res) {
    res.render('doctorlogin')
  })
  app.get('/login2.html', function (req, res) {
    res.render('login2')
  })
  app.get('/receptionistlogin', function (req, res) {
    res.render('receptionistlogin')
  })

  app.post('/newpost', function (req, res) {
   // console.log(req.body);

   var title=req.body.title_of_post;
   var author = req.body.author_name;

      Posts.push({title:title,author:author});
      res.redirect('/posts');
      // res.send('You posted something!!' + ' Title of post is ' + req.body.title_of_post
      // + ' Author is ' + req.body.author_name)
    // res.send('Title of post is' + req.body.title_of_post)
    // res.send('Author is' + req.body.author_name)

  })

  app.get('/posts', function (req, res) {

    res.render('posts',{posts:Posts});
  })


 // Put star always in bottom.........
 app.get('*', function (req, res) {
    res.send('This page is not defined....... By Anshaj')
  })

  app.listen(3000,function(){
      console.log('Server has Started at port 3000 !!');
  })
