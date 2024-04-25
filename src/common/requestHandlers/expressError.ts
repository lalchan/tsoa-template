import { Request, Response, NextFunction } from "express";
import { ExpressError } from "../types/errors/expressError";
import { ValidateError } from "tsoa";

export function errorHandler(
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	let error: ExpressError;
	if (err instanceof ValidateError) {
		error = new ExpressError(422, "Validation Failed", {
			fields: err.fields,
		});
	} else if (err instanceof ExpressError) {
		error = err;
	} else {
		console.log(err);
		error = new ExpressError(500, "Internal Server Error");
	}
	return res.status(error.status).json({
		message: error.props,
		...error.props,
	});
}
export function notFoundHandler(
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	return res.status(418).json({
		message: "Teapots don't brew coffee.",
	});
}
