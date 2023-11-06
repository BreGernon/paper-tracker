import express, { Request, Response } from 'express';
import papersRouter from './papers/papers.routes';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.middleware';
import dotenv from "dotenv";


dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(cors());


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(helmet());

console.log(process.env.My_SQL_DB_HOST);



if (process.env.NODE_ENV == 'development') {
    
    app.use(logger);
    console.log(process.env.GREETING + 'in dev mode')
}



app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Paper Tracker</h1>');
});

app.use('/', [papersRouter] );


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});