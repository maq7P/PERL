const Router = require('express');
const router = new Router();

const checkRole = require("../middleware/checkRoleMiddleware");
const {getAll, create} = require('../controllers/typeController');

router.post('/', checkRole('ADMIN'), create);
router.get('/', getAll);

module.exports = router;