import Express from 'express';
import StudentController from '../controllers/StudentController';

const route = Express.Router();

route.get('/students', StudentController.getStudents);

route.post('/create', StudentController.addStudent);

route.delete('/delete/:id', StudentController.deleteStudent);

route.put('/update', StudentController.updateStudent);

export default route;