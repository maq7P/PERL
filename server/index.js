require('dotenv').config();
require('./models/models');

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const sequelize = require('./db');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
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