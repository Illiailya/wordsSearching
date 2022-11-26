let testEl = document.getElementById("test-el")
let resultEl = document.getElementById("result-el")
let arr = testEl.textContent.split(' ');
let searchBtn = document.getElementById("search-el");
let countEl = document.getElementById("count-el")
inputEl = document.getElementById("input-el");
// ограничивает количество символов для инпута!
inputEl.oninput = function () {
	if (this.value.length > 1) {
			this.value = this.value.slice(0,1); 
	}
} 
//==========================================
let newArr = [];
searchBtn.textContent = "Search by letter: "
countEl.textContent = "Words count: "

searchBtn.addEventListener("click", function () {
	reset()
	let letter = inputEl.value;
	seacrchingBuk(letter)
	let number = newArr.length
	console.log(number);
	countEl.textContent += number
})
function seacrchingBuk (aaa) {
	for (let i = 0; i < arr.length; i++) {
	let word = arr[i];
	let massiv = word.split('');
	for(let j = 0; j < massiv.length; j++) {
		if (massiv[j] === aaa) {
			let newMassiv = massiv.join("")
			newArr.push(newMassiv)
		} 
	}
}
 resultEl.textContent = newArr.join(" ")
}
function reset () {
	newArr =  [];
	countEl.textContent ="Words count: " 
}



