const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay(); 
  const hour = date.getHours(); 

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); 
  } else {
    res.send("<h1>Sorry, we are only available from Monday to Friday, 9AM to 5PM.</h1>");
  }
});

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});