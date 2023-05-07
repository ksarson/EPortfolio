"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../routes/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
const port = 3000;
// Use the API router
app.use('/api', index_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
const uri = 'mongodb://localhost:27017/User';
mongoose_1.default
    .connect(uri)
    .then(() => {
    console.log('MongoDB connected!');
})
    .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
});
