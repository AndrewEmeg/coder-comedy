const cors = require("cors");
const express = require("express");
const path = require("path");
const collection = require("./mongo");

const app = express();

// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//////////
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Route all requests to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

//////////

app.post("/", async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
    };

    try {
        await collection.create([data]);
        res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving data!" });
    }
});

app.listen(8080, () => {
    console.log("This server is listening on port 8080");
});
