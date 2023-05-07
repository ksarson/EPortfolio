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
exports.UserController = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
exports.UserController = {
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            const user = yield user_model_1.default.create({ name, email, password });
            res.json({ user });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield user_model_1.default.find();
            res.json({ users });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updatedUser = yield user_model_1.default.findByIdAndUpdate(id, { name, email, password }, { new: true });
            res.json({ user: updatedUser });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            yield user_model_1.default.findByIdAndDelete(id);
            res.json({ message: 'User deleted successfully' });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }),
};
exports.default = exports.UserController;
