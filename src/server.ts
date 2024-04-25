import { initializeApp } from "./initialize";
import { RegisterRoutes } from "../build/routes";
import { Config } from "./config/env";

const app = initializeApp();
RegisterRoutes(app);

const port = Config.port
app.listen(port, () => {
    `Application is running on port ${port}`
})
