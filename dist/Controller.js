const model = new Model();
const render = new Renderer();
const mainInput = $(`#movie-title`);
const searchButton = $(`#search-by-title`);
const fetchMoviesOnClick = async function () {
	const mainInputValue = mainInput.val();
	let data = await model.fetchDataFromExternalApi(mainInputValue);
	render.renderData({ movie: data }, "movies", "movies-container");
};

searchButton.on("click", fetchMoviesOnClick);

const fetchRatingOnClick = async function () {
	const ID = $(this).closest(".warper").find(".rating-container").attr("id");
	let data = await model.fetchRatingFromExternalApi(ID);
	render.renderData({Ratings: data}, "rating", `${ID}`);
};

$("#movies-container").on("click", ".poster", fetchRatingOnClick);
