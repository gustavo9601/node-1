const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_ATLAS, {
                useNewUrlParser: true,
                useUnifiedTopology:true,
                useCreateIndex: true,
                useFindAndModify: false
            }
        )

        console.log("base de datos online")

    } catch (err) {
        const error = `Error en la bd: ${err.message}`;
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    dbConnection
}
