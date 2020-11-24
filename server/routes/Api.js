const express = require("express");
const router = express.Router();
const urllib = require("urllib");

router.get("/sanity", function (req, res) {
	res.send("Ok");
});

router.get("/movies/:title", function (req, res) {
	const { title } = req.params;
	urllib.request(
		`http://www.omdbapi.com/?s=${title}&apikey=a2e2ca53`,
		async function (err, data) {
			try {
				data = JSON.parse(data);
				const movieData = data.Search;

				await res.status(200).json(movieData);
			} catch (err) {
				await res.status(404).json(err);
			}
		}
	);
});

router.get("/rating/:ID", function (req, res) {
	const { ID } = req.params;
	urllib.request(
		`http://www.omdbapi.com/?i=${ID}&plot=full&apikey=a2e2ca53`,
		async function (err, data) {
			try {
				data = JSON.parse(data);
				data = data.Ratings.map((r) => r.Value);
				await res.status(200).json(data);
			} catch (err) {
				await res.status(404).json(err);
			}
		}
	);
});

module.exports = router;
