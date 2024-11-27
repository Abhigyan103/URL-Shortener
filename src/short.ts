import { Router } from "express";
import { URLs } from "./data";
const router = Router();

router.get('/', (req, res)=>{
    res.json(URLs);
})

router.post('/', (req, res)=>{
    const url = req.body.url
    const exists =URLs.find((value)=> value ==url)
    if(exists) return res.status(400).send('URL exists')
    const newUrl = generateNewURL()
    URLs.push({
        url: url,
        link: newUrl
    })
    res.send(newUrl)
})

const generateNewURL =()=>{
    let newUrl =""
    for (let i = 0; i < 5; i++) {
        const random = Math.random()*1000 % 26
        newUrl += String.fromCharCode('a'.charCodeAt(0) + random)
    }
    return newUrl
}

export default router

//dog god