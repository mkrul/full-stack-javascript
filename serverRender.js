import axios from "axios";
import config from "./config";

axios.get(`${config.serverUrl}/api/contests`)
	.then(response => {
		console.log(response.data);
	});
