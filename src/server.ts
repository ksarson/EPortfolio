import express, { Request, Response } from 'express';

const app = express();
// const a = 10;

app.get('/', (req: Request, res: Response) => {
    res.json({ foo: 'bar' });
});

app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
