import { initializeApp } from "./initialize";
import { RegisterRoutes } from "../build/routes";
import { Config } from "./config/env";
import {
	errorHandler,
	notFoundHandler,
} from "./common/requestHandlers/expressError";

const app = initializeApp();
RegisterRoutes(app);

const port = Config.port;

app.use(errorHandler);
app.use(notFoundHandler);
app.listen(port, () => {
	`Application is running on port ${port}`;
});
