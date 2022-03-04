const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const ApiError = require("../error/ApiError");
const {User, Basket} = require("../models/models");

const generateJWT = (id, email, role) => {
	return jwt.sign(
			{id, email, role},
			process.env.SECRET_KEY,
			{expiresIn: '24h'}
	);
}

class UserController {
	async registration(req, res, next){
		const {email, password, role} = req.body;

		if(!email || !password ){
			return next(ApiError.badRequest("Некорректный email или password"));
		}

		const candidate = await User.findOne({where: {email}});
		if(candidate) {
			return next(ApiError.badRequest("Пользователь с таким email уже существует"));
		}

		const hasPassword = await bcrypt.hash(password, 5);
		const user = await User.create({email, role, password: hasPassword});
		await Basket.create({userId: user.id});
		const token = generateJWT(user.id, email, user.role);

		return res.json({token})
	}
	async login(req, res, next){
		const {email, password} = req.body;
		const user = await User.findOne({where: {email}});

		if(!user){
			return next(ApiError.internalRequest("Пользователь не найден"));
		}
		let comparePassword = await bcrypt.compareSync(password, user.password);

		if(!comparePassword){
			return next(ApiError.internalRequest("Указан неверный пароль"));
		}

		const token = generateJWT(user.id, email, user.role);

		return res.json({token})
	}
	async check(req, res, next){
		const {user} = req;
		const token = generateJWT(user.id, user.email, user.role);

		return res.json({token})
	}
}

module.exports = new UserController();