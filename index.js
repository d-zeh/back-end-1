const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.listen(4000, () => console.log("Server running on 5500"));

app.get('/api/users', (req,res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    
    res.status(200).send(friends);

})