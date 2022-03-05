const Router = require('express');
const router = new Router();

const checkRole = require("../middleware/checkRoleMiddleware");
const {getAll, create, getOne} = require('../controllers/deviceController');

router.post('/', checkRole('ADMIN'), create);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;