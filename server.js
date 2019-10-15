var x = require("express");

var PORT = process.env.PORT || 8080;

var app = x();

app.use(x.static("public"));

app.use(x.urlencoded({ extended: true }));
app.use(x.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
