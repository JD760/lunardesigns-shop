import express from "express";
import { item } from "./types";

const router = express.Router();

router.get("/getitems", (req, res) => {
    const allItemData: item[] = [
        {
            title: "Whippet",
            id: 1,
            price: 15.00,
            searchTags: {type: "whippet", size: "7cm", style: ["heart", "sparkle"], colour: ["black", "white"]},
            img: "whippets.png"
        },
        {
            title: "Whippet",
            id: 2,
            price: 15.00,
            searchTags: {type: "whippet", size: "7cm", style: ["heart", "sparkle"], colour: ["black", "white"]},
            img: "whippets.png"
        },
        {
            title: "Labrador",
            id: 3,
            price: 14.00,
            searchTags: {type: "labrador", size: "9cm", style: ["heart", "clear"], colour: ["brown"]},
            img: "labradors.png"
        },
        {
            title: "Cat",
            id: 4,
            price: 12.00,
            searchTags: {type: "cat", size: "7cm", style: ["heart", "clear"], colour: ["purple"]},
            img: "cats.png"
        },
    ];
    res.json(allItemData);
})

export default router;