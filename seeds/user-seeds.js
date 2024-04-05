const { User } = require('../models');

const userdata = [
  {
    id: 1,
    userName: 'coffeeblvck',
    email: 'deez8@yahoo.com',
    password: 'pass',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
