const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
	async create(req, res, next){
		try{
			const {name} = req.body;
			const type = await Brand.create(({name}));

			return res.json(type)
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}
	async getAll(req, res){
		const brands = await Brand.findAll();

		return res.json(brands);
	}
}

module.exports = new BrandController();