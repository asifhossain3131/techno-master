import {MongoClient, ServerApiVersion } from "mongodb";

/**
 * @type {import('mongodb').Db}
 */
let db
const DbConnect = async () => {
  if (db) {
    return db;
  }

  try {
    const uri = `mongodb+srv://${process.env.Mongo_User}:${process.env.Mongo_Key}@cluster0.t31jaog.mongodb.net/?retryWrites=true&w=majority`
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
 
    // await client.connect();
    db = client.db("technoMaster");
    console.log("Connected to MongoDB successfully!");
    return db;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

export default DbConnect;