const Router = require('express');
const router = new Router();

const {getAll, addOne} = require('../controllers/ratingController');

router.get('/:id', addOne);
router.get('/', getAll);

module.exports = router;