"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = require("drizzle-orm/mysql2");
require("dotenv").config();
const promise_1 = __importDefault(require("mysql2/promise"));
const poolConnection = promise_1.default.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASSWORD
});
exports.db = (0, mysql2_1.drizzle)(poolConnection);
//# sourceMappingURL=db.js.map