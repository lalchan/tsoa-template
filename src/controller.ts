import { Controller, Route, Get } from "tsoa";

@Route("/")
export class MainController extends Controller {
	@Get()
	hello() {
		return {
			message: "Hello World!",
		};
	}
}
