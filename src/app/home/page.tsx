import Image from "next/image";
import styles from "./page.module.css";
import { GET } from "../api/checkend/route";
// import { run } from "../api/get/route";
// import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export default async function Home() {
  const uri = process.env.MONGO_URL
  const client = new MongoClient(uri);

  const db = client.db("sample_guides");
  const coll = db.collection("planets");
  await GET();
  // let list = ['']
  // const cursor = coll.find();
  const cursor = coll.find({ hasRings: true });

  // iterate code goes here
  await cursor.forEach(console.log);
  let items = await coll.find({ hasRings: true }).toArray()
  let list = items.map((item) => {
    return (
      <li key={item.name}>
        <a href={item.url}>{item.name}</a>
      </li>
    )
  })

  return (
    <div>
      <b>{"Planets (with rings)"}</b>
      {list}
    </div>
  )
}
