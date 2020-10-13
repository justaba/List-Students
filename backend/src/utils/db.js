"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const urlDB = 'localhost:27017/studentlist';
const db = {
    connect() {
        mongoose_1.default
            .connect(`mongodb://${urlDB}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
        })
            .then(() => {
            console.log(`Database connection`);
        })
            .catch((err) => {
            console.log(err);
        });
    },
};
exports.default = db;
