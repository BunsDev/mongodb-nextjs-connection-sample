import Home from "./home/page";
import { dbConnect } from "./lib/db";
import { GET } from "./api/get/route";

// @ts-ignore
async function _dbConnect() {
  let con = await dbConnect();
  await GET()
  return con;
}

export default async function HomePage() {

  await _dbConnect()

  return (
    <>
     <Home />
    </>
  );
}
