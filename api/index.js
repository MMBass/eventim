const express = require('express')
const cors = require('cors')
const app = express();
const helmet = require('helmet');

app.use(helmet());
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const dbUri = process.env.dbUri;
const client = new MongoClient(dbUri);
const collection = client.db("events").collection("events_data");

app.get('/events', async (req, res) => {
    let results = await dbReadAll();
    res.send(results);
});

async function dbReadAll() {
    await client.connect();
    let all = await collection.find().toArray();
    client.close();
    return all;
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app listening at port ${PORT}...`));