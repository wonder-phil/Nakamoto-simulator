const express = require("express");
const cors = require("cors");


const app = express();


const corsOptions = {
  origin: '*', // Allow all origins, or specify specific origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Allow Accept header
};

app.use(cors(corsOptions));

const HIRO_EXTENDED_API_V2 = "https://api.hiro.so/extended/v2";
const HIRO_EXTENDED_API_V1 = "https://api.hiro.so/extended/v1";


app.get("/burn-blocks/last", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.blockId;
	const URL = `${HIRO_EXTENDED_API_V2}/burn-blocks?limit=1`;
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

app.get("/burn-blocks/:BtcBlockId", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.BtcBlockId;
	const URL = `${HIRO_EXTENDED_API_V2}/burn-blocks/${realBlockId}`;
	console.log("URL: ", URL);
    try {
        const response = await fetch(URL);
        const data = await response.json();
		console.log("data: ", data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: `Error fetching block data: ${error}` });
    }
});

app.get("/pox/cycles/last", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.blockId;
	const URL = `https://api.mainnet.hiro.so/extended/v2/pox/cycles?limit=1`;
	console.log("URL: ", URL);
    try {
        const response = await fetch(URL);
        const data = await response.json();
		console.log("data: ", data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: `Error fetching block data: ${error}` });
    }
});


app.get("/blocks/last", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.blockId;
   
	const URL =  `${HIRO_EXTENDED_API_V2}/blocks?limit=1`; //`https://api.hiro.so/extended/v2/blocks?limit=1`;
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



app.get("/tenure-tx/last", async (req, res) => {
	//console.log("Server: ", req);
	const realBlockId = req.params.blockId;
   
	const URL =  `${HIRO_EXTENDED_API_V1}/tx?type=tenure_change&limit=1`;  
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
