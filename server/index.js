require('dotenv').config();
require('./models/models');

const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index');
const fileUpload = require('express-fileupload');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;



const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

//Error handler - is last middleware
app.use(errorHandler);


app.get('/', (req,res) => {
	res.status(200).json({message: 'Hello'})
});

const start = async () => {
	try{
		await sequelize.authenticate()
		await sequelize.sync()

		app.listen(PORT, () => console.log(`Server started on ${PORT}`));
	} catch(e){
		console.log(e)
	}
}
start();