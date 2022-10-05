const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Apoorva:Apoorva00@cluster0.n5gdpvb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
const dbName = "heheBoi";
const collection = db.collection("nftDrop");

let q = "xxxxxxxxxxx";
async function main(q) {
  await client.connect();
  //console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("nftDrop");
  const filteredDocs = await collection.find({ address: q }).toArray();
  if (filteredDocs.length > 0) {
    return "Already exists.";
  } else {
    let inserData = await collection.insertOne({
      address: q,
      ip: "68",
      ua: "ifone",
      data: Math.floor(Date.now() / 1000),
    });
    return inserData;
  }
}

main(q)
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
