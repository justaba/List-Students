import Express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import route from './routes/api';
import db from './utils/db';

const PORT: number = 4000;

const app: Application = Express();

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', route);
app.use(Express.static(path.join(__dirname + '/public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server runnning on ${PORT}`)
});