const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(() => {
        console.log("Failed to connect to MongoDB");
    });

const newSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
});

const collection = mongoose.model("users-form-data", newSchema);
module.exports = collection;

// YMQEdc2XaJEA531N
// andrewemeghebo2023
// const url =
//     "mongodb+srv://andrewemeghebo2023:YMQEdc2XaJEA531N@cluster0.fa3kl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
