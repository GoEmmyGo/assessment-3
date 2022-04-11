function colorAnswer(event) {
	event.preventDefault()

    alert(`Right now, Lilac. But honestly, its usually a shade of yellow or blue-green and that's about as non-descript as I can get about that`)
}

function ritualAnswer(event) {
	event.preventDefault()

    alert(`Bouldering at Red Rock Canyon National Conservancy, enough sweet climbs to last a lifetime and a personal project called "Sad Robot" that I will guaranteed send next time I go, please god, I have to send it`)
}

function placeAnswer(event) {
	event.preventDefault()
    
    alert(`Shoot, should've saved that last answer for this one. I guess if that's my favorite ritual, then being outside in the morning sun surrounded by tall trees and a slight breeze with my beautiful dogs running up to me and my partner by my side while I sip a cortado and look up is my favorite place to be`)
}


let colorClick = document.querySelector('#color')
let placeClick = document.querySelector('#place')
let ritualClick = document.querySelector('#ritual')

colorClick.addEventListener(`click`, colorAnswer)
placeClick.addEventListener(`click`, placeAnswer)
ritualClick.addEventListener(`click`, ritualAnswer)    
