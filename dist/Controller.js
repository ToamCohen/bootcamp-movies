const model = new Model();
const render = new Renderer();
const mainInput = $(`#movie-title`);
const searchButton = $(`#search-by-title`);
const fetchMoviesOnClick = async function () {
	const mainInputValue = mainInput.val();
	let data = await model.fetchDataFromExternalApi(mainInputValue);
	render.renderData({ movie: data }, "movies", "movies");
};

searchButton.on("click", fetchMoviesOnClick);
