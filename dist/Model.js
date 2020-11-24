class Model {
	async fetchDataFromExternalApi(inputValue) {
		let data = await $.get(`/movies/${inputValue}`);
		return data
	}
}
