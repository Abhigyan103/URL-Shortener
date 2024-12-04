import express from 'express';
import shortsRouter from './short';
import connectDb from './db/connect';
import URL from './schema/URL';
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/short', shortsRouter);
app.get('/', (req, res) => {
  res.send(`Hello Yash!`);
});
app.get('/not-found', (req, res) => {
  res.status(404).send('Not Found');
});
app.get('/:shortUrl',async (req, res) => {
  const shortUrl = req.params.shortUrl
  console.log(`shortURL : ${shortUrl}`);
  
  const urlObj = await URL.findOne({shortened:shortUrl});
  console.log(`urlObj :${urlObj}`);
  
  if(urlObj!=null){
    res.redirect(urlObj.original);
  }else res.redirect('/not-found');
});

app.listen(port, async () => {
  console.log("Connecting to database...");
  await connectDb();
  return console.log(`Express is listening at http://localhost:${port}`);
}); 