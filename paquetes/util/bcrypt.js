const bcrypt = require('bcrypt');

let password = '2334444';

bcrypt.hash(password, 5).then(hash => {
  bcrypt.compare(password, hash).then(r => console.log(r));
});
