export class ExpressError extends Error {
	public status: number;
	public props: Record<string, any>;
	constructor(status: number, message: string, props?: Record<string, any>) {
		super(message);
		this.status = status;
		this.props = props || {};
	}
}
