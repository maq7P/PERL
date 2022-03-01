const Router = require('express');
const router = new Router();

const {getAll, create} = require('../controllers/brandController');

router.post('/', create);
router.get('/', getAll);

module.exports = router;