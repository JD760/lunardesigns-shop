import express from "express";
import cors from "cors";
import items from "./items";

const app = express();
const PORT = 3000;

app.use(cors());
// serve static content eg images from the public folder
app.use(express.static("public"));
app.use("/items", items);


app.listen(PORT, () => {
    console.log("Backend running on port: ", PORT);
})