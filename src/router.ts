import { Request, Response, Router } from 'express';

const router = Router();

router.get('/text', (req: Request, res: Response): void => {
  res.send('some text');
  res.end();
});

router.get('/json', (req: Request, res: Response): void => {
  res.json({ message: 'some json' });
  res.end();
});

export { router };
