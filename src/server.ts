import { initializeApp } from "./initialize";
import { RegisterRoutes } from "../build/routes";
import { Config } from "./config/env";
import {
	errorHandler,
	notFoundHandler,
} from "./common/requestHandlers/expressError";
import { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";

const app = initializeApp();
Config.app.logging ? app.use(morgan("dev")) : null;
RegisterRoutes(app);

const port = Config.app.port;

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
	return res.send(
		swaggerUi.generateHTML(await import("../build/swagger.json")),
	);
});

app.use(errorHandler);
app.use(notFoundHandler);
app.listen(port, () => {
	console.log(`Application is running on port ${port}`);
});
