const express = require("express");
const router = express.Router();
const urllib = require("urllib");

router.get("/sanity", function (req, res) {
	res.send("Ok");
});

router.get("/movies/:title", function (req, res) {
	const { title } = req.params;
	urllib.request(`http://www.omdbapi.com/?s=${title}&apikey=a2e2ca53`, async function (err, data) {
		try {
			data = JSON.parse(data);
			const movieData = data.Search;

			await res.status(200).json(movieData);
		} catch (err) {
			await res.status(404).json(err);
		}
	});
});

module.exports = router;
