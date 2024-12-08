import { config } from "dotenv";

import { join } from "path";

config({
	path: join(__dirname, "..", "..", ".env"),
});

export class Config {
	constructor() {
		throw new Error("This is an static class.");
	}

	static readonly app = {
		env: this.parseString("APP_ENV"),
		port: this.parseInt("APP_PORT"),
		logging: this.parseAsBoolean("APP_LOGGING"),
	};

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

	private static parseAsBoolean(key: string): boolean {
		const value = this.getFromEnv(key);
		if (!value) {
			throw new Error(`Config missing: ${key}`);
		}
		return value === "true";
	}
}
