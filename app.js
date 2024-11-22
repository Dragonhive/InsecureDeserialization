const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [
  { username: 'rofi', role: 'user' },
  { username: 'admin', role: 'admin' },
];


app.post('/login', (req, res) => {
  const { username } = req.body;  


  const user = users.find((u) => u.username === username);

  if (user) {
    if (user.role === 'admin') {
      return res.send('Welcome Admin! You have full access.');
    } else {
      return res.send('Welcome User! You have limited access.');
    }
  } else {
    return res.status(401).send('Invalid credentials');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
