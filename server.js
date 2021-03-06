var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));


var articles = {
'article-One': { 
     title :'Article One ! Shruti Mallapadi' ,
    heading : 'Article one',
    date  : 'august 21 st 2017',
    content : ` <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>`
    
},
 'article-Two' : {
    title : 'Article Two ! Shruti Mallapadi' ,
    heading :'Article Two',
    date : 'august 21 st 2017',
    content : `<p>
            This is the content for my second article.
             </p>`

},
'articleThree' : {
title : 'Article Three ! Shruti Mallapadi' ,
heading :'Article Three',
date :'august 21 st 2017',
content :` <p>
            'This is the content for my Third article.'
        </p>`
}
};
function CreateTemplate(data)
{
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
}
var htmltemplate = `
<html>
  <head>
        <title>
            $ {title}
        </title>
        
        <style>
            .Container {
                max-width:800px; 
                margin:# center;
                color:blue;
                font-family:sans-serif;
                padding-left:20 px;
                padding-right:20 px;
            }
        </style>
    </head>
    <body>
           <div class="container">
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
              <h3>
         ${heading}
              </h3>
              <div>
                  ${date.toDateString()}
              </div>
       ${content}
              </div>
              <hr/>
              <h4>Comments</h4>
              <div id="comment_form">
              </div>
              <div id="comments">
                <center>Loading comments...</center>
              </div>
          </div>
    <script type="text/javascript" src="/ui/article.js"></script>
      </body>
    </html>
    `;
    return htmlTemplate;
}
   
//var  counter=0;
 //app.get('/counter',function (req,res)){
   //    counter=counter + 1;
     //  res.send(counter.tostring());
   //});
       
   //}
   
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
     res.send(createtemplate(articles[articlename]));
     var articleName = req.params.articleName;
     
});
app.get('/ui/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});
app.get('/ui/madi.png', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
})

var port = 80;
app.listen(port, function () {
  console.log('IMAD course app listening on port ${port}!');
});
