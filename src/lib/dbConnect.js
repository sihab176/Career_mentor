
// import { MongoClient, ServerApiVersion } from "mongodb";

// let client;
// let clientPromise;

// export default async function dbConnect(collectionName) {
//   if (!clientPromise) {
//     client = new MongoClient(process.env.MONGODB_URI, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });

//     clientPromise = client.connect();
//   }

//   const connectedClient = await clientPromise;
//   const db = connectedClient.db("aicareermentor"); // তোমার DB নাম
//   return db.collection(collectionName);
// }


import { MongoClient, ServerApiVersion } from "mongodb"


export const collectionName={
    doctorCollection :"careerMentor"
}

export default function dbConnect(collectionName){
    const uri =process.env.MONGODB_URI
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db("aicareermentor").collection(collectionName)
}