const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burger_controller');
const colors = require('colors');

const PORT = process.env.PORT || 3300;

const app = express();

// Location for static content
app.use(express.static('public'));

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Starting server
app.use(routes);

app.listen(PORT, () => {
  console.clear();
  console.log(`App now listening at localhost: ${PORT}`.green.bold);
});
