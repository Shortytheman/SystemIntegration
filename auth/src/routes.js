import express from 'express';
import bcrypt from 'bcrypt';
import fs from 'fs';

const router = express.Router();
const usersFile = './users.json';

const getUsers = () => {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(usersFile));
};

const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users));
};

router.get('/signup', (req, res) => {
  res.sendFile('signup.html', { root: '.././views' });
});

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const hashedPassword = await bcrypt.hash(password, 10);

  if (users.find(user => user.username === username)) {
    return res.send('Username already exists.');
  }

  users.push({ username, password: hashedPassword });
  saveUsers(users);
  res.redirect('/login');
});

router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: '.././views' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find(user => user.username === username);

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.user = user;
    res.redirect('/welcome');
  } else {
    res.send('Invalid username or password.');
  }
});

router.get('/welcome', (req, res) => {
  if (req.session.user) {
    res.sendFile('welcome.html', { root: './views' });
  } else {
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

export default router;
