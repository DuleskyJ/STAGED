const router = require('express').Router();
const { Event } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const eventData = await Event.findAll();
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    // const fillData = await Event.create({
    //   title: req.body.title,
    //   description: req.body.description,
    //   date: req.body.date,
    //   location: req.body.location,
    //   price: req.body.price,
    //   user_id: req.session.user_id,
    // });
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;