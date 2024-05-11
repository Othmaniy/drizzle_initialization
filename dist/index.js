"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("welcom to ts ");
});
app.get("/ch", (req, res) => {
    res.send("kjshgfg");
});
app.listen(3000, () => {
    console.log("listening to port ");
});
