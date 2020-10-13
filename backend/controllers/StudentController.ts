import { Request, Response} from 'express';
import Student from '../models/Student';

export default class StudentController {

    static async addStudent (req: Request, res: Response) {
        const { name, date, estimate } = req.body;
        console.log(req.body)
        const student = new Student({
            name,
            date, 
            estimate
        });
        
        try {
            const saveStudent = await student.save();

            res.status(200).json({ status: "Profile student created", id: saveStudent.id});

        } catch (e) {
            res.status(400).send(e);
        }
    }

    static async deleteStudent ( req: Request, res: Response) {
        const id = req.params.id;
        try {
            const data = await Student.findByIdAndDelete({_id: id});

            res.status(200).json({ status: "Profile student deleted"});
        } catch (e) {
            res.status(400).send(e);
        }
    }

    static async updateStudent (req: Request, res: Response) {
        
        const { name, date, estimate, _id } = req.body;
        console.log(req.body)

        try {
           await Student.findByIdAndUpdate({_id: _id}, {name, date, estimate});

           res.status(200).json({ status: "Profile student updated"});
        } catch (e) {
            res.status(400).send(e);
        }
        
    }

    static async getStudents (req: Request, res: Response) {

        try {
            const students = await Student.find({});

            res.status(200).json({ data: students});
        } catch (e) {
            res.status(400).send(e); 
        }
        
    }
    
} 