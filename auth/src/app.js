import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import routes from './routes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'a secret key',
  resave: false,
  saveUninitialized: true
}));

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
