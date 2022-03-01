const Router = require('express');
const router = new Router();

const {getAll, create, getOne} = require('../controllers/deviceController');

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;