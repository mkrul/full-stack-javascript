const env = process.env;

export const nodeEnv = env.NODE_ENV || "development";

export const logStars = function(message) {
	console.info(`********* ${message} *********`);
};
export default {
	port: env.PORT || 3000
};
