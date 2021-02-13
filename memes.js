let memes;
let memetitle;

function memeIt(memes) {
	$.getJSON('https://meme-api.herokuapp.com/gimme/PampamilyangPaoLUL')
	.then(randMeme => {
		console.log(randMeme)
		memeTitle = randMeme.title
		return randMeme.url;
	})
	.then(randMeme => {
		console.log(memeTitle)
		let img = document.createElement('img');
		img.setAttribute('class', 'img-fluid');
		img.src = randMeme;
		document.getElementById("memesGoesHere").innerHTML = "";
		document.getElementById("memesGoesHere").appendChild(img);
		document.getElementById("title").textContent = `${memeTitle}`
	});
};

