const db = require('../db');
const bcrypt = require('bcryptjs');

exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Error', err });
      res.status(201).json({ message: 'User registered' });
    }
  );
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB Error' });

    if (results.length === 0) return res.status(401).json({ message: 'No user found' });

    const user = results[0];
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) return res.status(401).json({ message: 'Wrong credentials' });

    res.status(200).json({ message: 'Login success', user });
  });
};
