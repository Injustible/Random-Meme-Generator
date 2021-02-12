let memes;
let randMeme;

function memeIt(memes) {
	$.getJSON('https://meme-api.herokuapp.com/gimme')
	.then(randMeme => {
		return randMeme.url;
	})
	.then(randMeme => {
		console.log(randMeme)
		let img = document.createElement('img');
		img.setAttribute('class', 'img-fluid');
		img.src = randMeme;
		document.getElementById("memesGoesHere").innerHTML = "";
		document.getElementById("memesGoesHere").appendChild(img);
	});
};

