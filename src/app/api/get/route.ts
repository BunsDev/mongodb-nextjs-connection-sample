import { dbConnect, disconnect } from "@/app/lib/db";
import GetModel from "@/app/models/GetModel";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  // const con = await dbConnect();
  // console.log("hit db connect", new Date().getSeconds());
  const uri = process.env.MONGO_URL
  const client = new MongoClient(uri);

// database and collection code goes here
const db = client.db("sample_guides");
const coll = db.collection("planets");
// console.log("collection: %s", coll.find);
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);

  return new NextResponse("connected and disconnected");

}