'use client'
import {createCar} from '../../lib/redis';
// import the createCar function we exported in redis.js

// every api route in next.js exports a default handler
export default async function handler(req, res){
    // req.body coming from UI fetch()
    const id = await createCar(req.body);

    res.status(200).json({id});
}