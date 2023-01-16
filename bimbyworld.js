(function () {
	'use strict';

	var holder = jQuery("h1.post-title.entry-title");

	var button = document.createElement("button");
	button.innerText = 'Partilhar';
	button.classList.add('button--primary');
	holder.append(button);

	button.onclick = function () {

		var title = document.querySelector("meta[property='og:title']").getAttribute("content");
		var socialtocopy = jQuery('#h_socialtocopy').val().replaceAll(/\[br\]/ig, '\n');
		var link = jQuery('link[rel="canonical"').attr("href");

		var result = title + "\nVeja aqui: " + link + "\n" + socialtocopy + "\nVeja aqui: " + link;

		console.clear();
		console.log(result);

		copyToCipboard(result);

		return false;
	};

})();