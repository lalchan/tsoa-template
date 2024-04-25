"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialize_1 = require("./initialize");
const routes_1 = require("../build/routes");
const app = (0, initialize_1.initializeApp)();
app.use((0, routes_1.RegisterRoutes)(app));
app.listen(3000, () => {
    "Application is running on port 3000";
});
