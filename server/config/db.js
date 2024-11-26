const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    }catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;

// mongoose.connect(process.env.MONGODB_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(db => console.log('DB is conected'))
// .catch(err => console.error(err));

