"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usertable = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.usertable = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.int)("id").primaryKey().autoincrement(),
    name: (0, mysql_core_1.varchar)("name", { length: 256 }).notNull(),
    lastname: (0, mysql_core_1.varchar)("lastname", { length: 256 }),
    password: (0, mysql_core_1.varchar)("password", { length: 256 }).notNull(),
    role: (0, mysql_core_1.mysqlEnum)("role", ["admin", "user", "employee"]).notNull().default("user"),
    createdAt: (0, mysql_core_1.timestamp)("createdat").defaultNow().notNull(),
    updatedut: (0, mysql_core_1.timestamp)("updatedat").onUpdateNow()
});
//# sourceMappingURL=userschema.js.map