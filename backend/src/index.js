"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./routes/api"));
const db_1 = __importDefault(require("./utils/db"));
const PORT = 4000;
const app = express_1.default();
db_1.default.connect();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use('/api', api_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname + '/public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '/public/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server runnning on ${PORT}`);
});
