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
        res.redirect('/tasks/list');
    });

router.route('/list')
    .get(async (req: Request, res: Response) => {
        const tasks = await Task.find().lean();
        res.render('tasks/list', { tasks });
    });

router.route('/delete/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.redirect('/tasks/list');
    });

export default router;
