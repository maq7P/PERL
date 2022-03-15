const Router = require('express');
const router = new Router();

const {getAll, addOne, getOne} = require('../controllers/ratingController');

router.post('/', addOne);
router.get('/', getAll);
router.get('/', getOne);

module.exports = router;