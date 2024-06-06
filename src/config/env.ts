import { config } from "dotenv";
import { join } from "path";

config({
	path: join(__dirname, "..", "..", ".env"),
});

export class Config {
	constructor() {
		throw new Error("This is an static class.");
	}

	static readonly port: number = this.parseInt("PORT");

	static readonly nodeEnv: string = this.parseString("NODE_ENV");

	private static getFromEnv(key: string) {
		return process.env[key];
	}

	private static parseInt(key: string): number {
		const value = this.getFromEnv(key);
		if (!value) {
			throw new Error(`Config missing: ${key}`);
		}
		const parsedValue = parseInt(value);
		if (isNaN(parsedValue)) {
			throw new Error("This config is not of correct type");
		}
		return parsedValue;
	}

	private static parseString(key: string): string {
		const value = this.getFromEnv(key);
		if (!value) {
			throw new Error(`Config missing: ${key}`);
		}
		return value;
	}
}
