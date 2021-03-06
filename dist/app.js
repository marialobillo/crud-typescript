"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Application {
    constructor() {
        this.app = express_1.default();
    }
    start() {
        this.app.listen(4040, () => {
            console.log('Server running at port 4040');
        });
    }
}
exports.default = Application;
