import express from 'express';
import shortsRouter from './short';
import { URLs, URLType } from './data';
import { PrismaClient } from '@prisma/client';
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/short', shortsRouter);
app.get('/', (req, res) => {
  res.send(`Hello Yash! ${port}`);
});
app.get('/not-found', (req, res) => {
  res.status(404).send('Not Found');
});
app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  
  const obj = URLs.find((item: URLType, index: Number, obj)=>{
    return item.link == shortUrl
  });
  if(obj!=null){
    res.redirect(obj!.url);
  }else res.redirect('/not-found');
});

async function createUsers(){
  const prisma = new PrismaClient()
  await prisma.user.create({
    data:{
      email:"abc@123",
      password:"123456",
      name:"Yash"
    }
  })
  console.log(prisma.user.findMany())
}

app.listen(port, () => {
  createUsers()
  return console.log(`Express is listening at http://localhost:${port}`);
});