const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://lenakroeker:EeuK5mE8XTAyMnme@rk-cluster-1.69ylh4t.mongodb.net/?retryWrites=true&w=majority&appName=rk-cluster-1";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Export the run function so it can be imported in other files
module.exports = { run };
