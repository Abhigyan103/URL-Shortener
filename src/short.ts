import { Router } from "express";
import URL from "./schema/URL";
const router = Router();

router.get('/', (req, res)=>{
    res.json(URL);
})

router.post('/', async (req, res)=>{
    const originalUrl = req.body.url
    const urlIfExists =await URL.findOne({original:originalUrl})
    if(urlIfExists){ 
        res.send(urlIfExists.shortened)
        return;
    }
    const shortenedUrl = generateNewURL()
    const newUrlObj = new URL({
        original:originalUrl,
        shortened:shortenedUrl
    })
    newUrlObj.save()
    res.send(newUrlObj.shortened)
});

const generateNewURL =()=>{
    let newUrl =""
    for (let i = 0; i < 5; i++) {
        const random = Math.random()*1000 % 26
        newUrl += String.fromCharCode('a'.charCodeAt(0) + random)
    }
    return newUrl
}

export default router