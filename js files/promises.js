console.log("Promises tutorial");
console.log("File activated successfully");

// promises is one of the asynchronous ways of js.

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e98607609cmshb42877e58f14cdcp1ce38fjsnf412e5b09c0f',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${}', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    