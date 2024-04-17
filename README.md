This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Implementing MongoDB

`lib/db.js`: dbConnect() connects to the db via the `process.env.MONGO_URL`
`src/app/api/post/route.tsx`: POST to DB.