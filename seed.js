const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ts-crud";
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "seed-data.json"), "utf-8")
);

async function seed() {
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("tasks");

    const result = await collection.insertMany(data);
    console.log(`✅ Inserted ${result.insertedCount} tasks vào collection "tasks"`);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

seed();
