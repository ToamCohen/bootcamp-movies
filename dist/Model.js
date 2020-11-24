class Model {
	async fetchDataFromExternalApi(inputValue) {
		let data = await $.get(`/movies/${inputValue}`);
		return data;
	}

	async fetchRatingFromExternalApi(ID) {
		let data = await $.get(`/rating/${ID}`);
		return data;
	}
}
