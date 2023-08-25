'use client'
import {createClient} from 'redis';
import {Schema, Repository, EntityId} from 'redis-om';


// This file defines all the redis methods and schema and definitions, etc
// by default createClient connects to localhost:6379
const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));

async function connect(){
    // open the connection if it's not already open
    if (!client.isReady) {
        await client.connect();
    }
}


const schema = new Schema('Car', 
    {
        make:{type: 'string'},
        model: {type: 'string'},
        image: {type: 'string'},
        description: {type: 'text', textSearch: true},
    },
    {   // Operate in JSON format, easier than hash in redis
        dataStructure: 'JSON',
    }
);

export async function createCar(data){
    await connect();
    // get data from frontend UI form
    const repository = new Repository(schema, client);
    let car = data;

    // Redis will return auto-generated ID (Car:01FNDF30nFo...)
    car = await repository.save(car);
    return car[EntityId];
}

// CRUCIAL!!!! Don't forget to visit /api/createIndex before searching, otherwise get error: no such index'
export async function createIndex(){
    await connect();
    const repo = new Repository(schema, client);
    await repo.createIndex();
}

export async function searchCars(q){
    await connect();
    const repo = new Repository(schema, client);

    const cars = await repo.search()
        .where('make').eq(q)
        .or('model').eq(q)
        .or('description').matches(q)
        .return.all();
    console.log(cars);
    return cars;
}