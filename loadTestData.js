import { MongoClient } from "mongodb";
import assert from "assert";
import config from "./config";

MongoClient.connect(config.mongodbUri, { useNewUrlParser: true}, (err, client) => {
	assert.equal(null, err);
	console.info("Connected successfully to the server");
	const db = client.db("test");

	db.collection("contests").insertMany([
		{ id: 1,
			categoryName: "Business/Company",
			contestName: "Cognitive Building Blocks",
			description: "This product is a classroom tool that scaffolds higher order thinking.",
			nameIds: []
		},
		{ id: 2,
			categoryName: "Magazine/Newsletter",
			contestName: "Sustainable Food Production",
			description: "Educating the public about sustainable food production",
			nameIds: []
		},
		{ id: 3,
			categoryName: "Software Component",
			contestName: "Big Data Analytics for Cash Circulation",
			description: "Data is created at every touch point in a notes life-cycle.",
			nameIds: [103, 104, 105]
		},
		{ id: 4,
			categoryName: "Website",
			contestName: "Free programming books",
			description: "A list of free online programming books, categorized by languages/topics",
			nameIds: []
		}
	]).then(response => {
		console.info("Contests", response.insertedCount);
		db.collection("names").insertMany([
			{ id: 101, name: "Mind Assembly", timestamp: new Date() },
			{ id: 102, name: "Brain Scaffold", timestamp: new Date() },
			{ id: 103, name: "Cash View", timestamp: new Date() },
			{ id: 104, name: "Currency Map", timestamp: new Date() },
			{ id: 105, name: "Cash Board", timestamp: new Date() },
			{ id: 106, name: "RootLib", timestamp: new Date() },
		]).then(response => {
			console.info("Names", response.insertedCount);
			client.close();
		});
	});
});
