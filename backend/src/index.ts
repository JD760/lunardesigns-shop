import express from "express";
import cors from "cors";

const allItemData = [
    {
        title: "Whippet",
        id: 1,
        price: 15.00,
        searchTags: {type: "whippet", size: "7cm", style: ["heart", "sparkle"], colour: ["black", "white"]},
        img: "whippets.png"
    },
    {
        title: "Labrador",
        id: 2,
        price: 14.00,
        searchTags: {type: "labrador", size: "9cm", style: ["heart", "clear"], colour: ["brown"]},
        img: "labradors.png"
    },
    {
        title: "Cat",
        id: 3,
        price: 12.00,
        searchTags: {type: "cat", size: "7cm", style: ["heart", "clear"], colour: ["purple"]},
        img: "cats.png"
    },
]

const app = express();

const PORT = 3000;
app.use(cors());

app.get("/", (req, res) => {
    res.json({allItemData});
});

app.listen(PORT, () => {
    console.log("Backend running on port: ", PORT);
})