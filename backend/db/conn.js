const mongoose = require("mongoose")

async function main (){
    try {

        await mongoose.connect(
            "mongodb+srv://rodrigocamargo854:Q8RkJPPLZtSpnAbk@cluster0.ghvh7jd.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("conectado ao banco")
    } catch (error) {

        console.log(`error${error}`)
        
    }
}

module.exports = main