const router = require('express').Router();
const bodyParser = require('body-parser');

const entry = require('./entryRouter');
const user = require('./userRouter');

// Middelware
const notFound = require('../middlewares/notFound');

// Json parser
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Maing page
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

// Entries
router.use('/entry', entry);

// Users
router.use('/user', user);

router.use(notFound);

module.exports = router;
