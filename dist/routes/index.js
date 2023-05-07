"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
// Define a GET endpoint
router.get('/', user_controller_1.default.getUser);
// Define a POST endpoint
router.post('/', user_controller_1.default.createUser);
// Define a PUT endpoint
router.put('/:id', user_controller_1.default.updateUser);
// Define a DELETE endpoint
router.delete('/:id', user_controller_1.default.deleteUser);
exports.default = router;
