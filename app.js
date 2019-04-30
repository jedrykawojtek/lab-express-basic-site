const express = require("express")
const app = express()
const port = 3000;
const hbs = require('hbs');

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static(__dirname + "/public"))


// homepage
app.get("/", (req, res) => {
    res.render("index")
});

// about page
app.get("/about", (req, res) => {
    res.render("about")
});

// gallery page
app.get("/gallery", (req, res) => {
    res.render("gallery")
});

app.listen(port, ()=> {
    console.log(`listen to port ${port}`)
})