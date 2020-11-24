class Renderer {
	renderData(data, templateName, containerName) {
		const source = $(`#${templateName}-template`).html();
		const template = Handlebars.compile(source);
		const someHTML = template(data);
		$(`#${containerName}-container`).empty().append(someHTML);
	}
}
