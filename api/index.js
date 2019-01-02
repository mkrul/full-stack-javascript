import express from "express";
import { MongoClient } from "mongodb";
import assert from "assert";
import config from "../config";

let db;
MongoClient.connect(config.mongodbUri, { useNewUrlParser: true }, (err, client) => {
	assert.equal(null, err);

	db = client.db("test");
});

const router = express.Router();

router.get("/contests", (req, res) => {
	let contests = {};
	db.collection("contests").find({})
		.project({
			id: 1,
			categoryName: 1,
			contestName: 1
		})
		.each((err, contest) => {
			assert.equal(null, err);

			if (!contest) {
				res.send({ contests });
				return;
			}

			contests[contest.id] = contest;
		});
});

router.get("/names/:nameIds", (req, res) => {
	const nameIds = req.params.nameIds.split(",").map(Number);
	let names = {};
	db.collection("names").find({ id: { $in: nameIds} })
		.each((err, name) => {
			assert.equal(null, err);

			if (!name) {
				res.send({ names });
				return;
			}

			names[name.id] = name;
		});
});

router.get("/contests/:contestId", (req, res) => {
	db.collection("contests")
		.findOne({ id: Number(req.params.contestId) })
		.then(contest => res.send(contest))
		.catch(console.error);
});

export default router;
