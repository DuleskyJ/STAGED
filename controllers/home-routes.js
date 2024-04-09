const router = require('express').Router();
const { User,Event } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const eventData = await User.findAll({
      include: [
        {
          model: Event,
        },
      ],
    });
    const events = eventData.map((data)=> data.get({plain: true}));

    res.render('home', {events, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/form', (req, res) => {
  res.render('form');
});


module.exports = router;
