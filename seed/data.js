import axios from "axios"
import 'dotenv/config'
import db from "../db/connection.js"
import Astronomy from "../models/Astronomy.js"

async function insertData(){
    await db.dropDatabase()

    let results = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=100`)

    await Astronomy.create(results.data)

    console.log("Astronomy Data Created!")

    await db.close()
}

insertData()