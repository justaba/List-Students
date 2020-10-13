"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StudentController_1 = __importDefault(require("../controllers/StudentController"));
const route = express_1.default.Router();
route.get('/students', StudentController_1.default.getStudents);
route.post('/create', StudentController_1.default.addStudent);
route.delete('/delete/:id', StudentController_1.default.deleteStudent);
route.put('/update', StudentController_1.default.updateStudent);
exports.default = route;
