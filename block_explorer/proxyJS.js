const express = require("express");
const cors = require("cors");


const app = express();


const corsOptions = {
  origin: '*', // Allow all origins, or specify specific origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Allow Accept header
};

app.use(cors(corsOptions));

app.get("/bitcoin/block/:blockId", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.blockId;
	const URL = `https://api.hiro.so/extended/v1/block/${realBlockId}`;
	console.log("URL: ", URL);
    try {
        //const { blockId } = req.params;
        const response = await fetch(URL);
        const data = await response.json();
		console.log("data: ", data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: `Error fetching block data: ${error}` });
    }
});

app.get("/pox/cycles", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.blockId;
	const URL = `https://api.mainnet.hiro.so/extended/v2/pox/cycles`;
	console.log("URL: ", URL);
    try {
        //const { blockId } = req.params;
        const response = await fetch(URL);
        const data = await response.json();
		console.log("data: ", data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: `Error fetching block data: ${error}` });
    }
});


app.get("/last/stacks/block", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.blockId;
	const URL = `https://api.mainnet.hiro.so/extended/v1/block?limit=1`;
	console.log("URL: ", URL);
    try {
        //const { blockId } = req.params;
        const response = await fetch(URL);
        const data = await response.json();
		console.log("data: ", data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: `Error fetching block data: ${error}` });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
