import { Router, Request, Response, request } from 'express';

const router = Router();

// Models
import Task from '../models/Task';

router.route('/create') 
    .get((req: Request, res: Response) => {
        res.render('tasks/create');
    })
    .post( async (req: Request, res: Response) => {
        const { title, description } = req.body;
        const newTask = new Task({title, description});
        await newTask.save();
        res.send('Saved!');
    });

router.route('/list')
    .get(async (req: Request, res: Response) => {
        const tasks = await Task.find();
        console.log(tasks);
        res.render('tasks/list', { tasks });
    })

export default router;
