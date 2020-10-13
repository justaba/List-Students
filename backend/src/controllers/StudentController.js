"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../models/Student"));
class StudentController {
    static addStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, date, estimate } = req.body;
            console.log(req.body);
            const student = new Student_1.default({
                name,
                date,
                estimate
            });
            try {
                const saveStudent = yield student.save();
                res.status(200).json({ status: "Profile student created", id: saveStudent.id });
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
    }
    static deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const data = yield Student_1.default.findByIdAndDelete({ _id: id });
                res.status(200).json({ status: "Profile student deleted" });
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
    }
    static updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, date, estimate, _id } = req.body;
            console.log(req.body);
            try {
                yield Student_1.default.findByIdAndUpdate({ _id: _id }, { name, date, estimate });
                res.status(200).json({ status: "Profile student updated" });
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
    }
    static getStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield Student_1.default.find({});
                res.status(200).json({ data: students });
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
    }
}
exports.default = StudentController;
