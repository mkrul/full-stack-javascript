const env = process.env;

export const nodeEnv = env.NODE_ENV || "development";

export const logStars = function(message) {
	console.info(`********* ${message} *********`);
};
export default {
	port: env.PORT || 3000,
	host: env.HOST || "0.0.0.0",
	get serverUrl() {
		return `http://${this.host}:${this.port}`;
	}
};
