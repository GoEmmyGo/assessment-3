console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submission success, excellent work rubberhead');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function iLoveYou(event) {
	event.preventDefault()

	alert(`Rubber Ducky says "I love you"`)
}

let hover = document.getElementById('duck')

hover.addEventListener(`mouseover`, iLoveYou)


// const backgroundColor = (event) => {
//     sayHelloButton.style.backgroundColor = 'black';
//     sayHelloButton.style.color = 'white';
// }

// sayHelloButton.addEventListener(`mouseover`, backgroundColor)
// backgroundColor()