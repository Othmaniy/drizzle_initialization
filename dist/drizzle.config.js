"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_kit_1 = require("drizzle-kit");
require("dotenv").config();
exports.default = (0, drizzle_kit_1.defineConfig)({
    dialect: "mysql",
    schema: "./src/db/schema",
    out: "./migrations",
    dbCredentials: {
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: "127.0.0.1",
        port: 3000,
        database: "drizzle",
    }
});
//# sourceMappingURL=drizzle.config.js.map