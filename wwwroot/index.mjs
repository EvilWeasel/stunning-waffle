import Express from 'express';

const APP = Express();
const PORT = 51234;

// GET, PUT, POST, DELETE

APP.get("/", (req, res) => {
    res.send("hewwo world :3");
}, (err) => {
    res.sendStatus(500);    
});
APP.get("/totd", (req, res) => {
    res.send("Today is a good day :3");   
}, (err) => {
    res.sendStatus(500);   
});


// listen to any incoming request on port 51234
APP.listen(PORT, () => console.log("listening on port " + PORT));