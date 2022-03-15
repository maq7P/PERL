const {Rating} = require('../models/models');
const ApiError = require('../error/ApiError');

class RatingController {
	async addOne(req, res, next){
		try{
			let {deviceId, userId, rate} = req.body;
			let
					haveRating = await Rating.findAll({where: {deviceId, userId}});

			if(haveRating) return

			return await Rating.create({userId, deviceId, rate})
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}

	async getAll(req, res, next){
		try{
			let { deviceId } = req.query;

			let
					rating = deviceId ? await Rating.findAll({where: {deviceId}}) : await Rating.findAll()

			return res.json(rating);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}
}

module.exports = new RatingController();