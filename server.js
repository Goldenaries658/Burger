const express = require('express');
const exphbs = require('express-handlebars');

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

app.listen(PORT, () => console.log(`App now listening at localhost: ${PORT}`));
