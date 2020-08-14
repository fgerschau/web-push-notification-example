import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 8080; // default port to listen

app.use(express.static(path.join(__dirname, '../../client')));
app.use(bodyParser.json());

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
