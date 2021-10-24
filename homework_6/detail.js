
const productOptions = {
	quantity: 1,
	glazing: "1"
}
const checkOut = document.getElementById("checkOut");
const addToCartElement = document.getElementById("addToCart");
const cartNum = document.getElementById("numCart");
// const values = document.getElementById("glazingOptSelected");
// values.style.display = "none";

function addToCart() {
	addToCartElement.classList.add("hideElement");
	checkOut.classList.remove("hideElement");
	cartNum.innerText = productOptions.quantity;
}

function changeImage(element) {
	const value = element.getAttribute("value"); 
	let allOptions = document.getElementsByClassName('glazingSingleOpt'); 
	let allSelectedOptions = document.getElementsByClassName("glazingS");
	for (let i = 0; i < allOptions.length; i++) {
		let currentValue = allOptions[i].getAttribute("value");
		if (currentValue == value) {
			// show checked image
			allOptions[i].style.display = "none";
			allSelectedOptions[i].style.display = "block"; 
		}
		else{
			// show unchecked image
			allOptions[i].style.display = "block"; 
			allSelectedOptions[i].style.display = "none"; 
		}
	} 
}

// function changeImage(element) {
// 	let allOptions = document.getElementsByClassName('glazingSingleOpt'); 
// 	let allSelectedOptions = document.getElementsByClassName("glazingOptSelected");
// 	for (var i = 0; i < allOptions.length; i++) {
// 		allSelectedOptions[i].style.display = "block"; 

// 		allOptions[i] = allSelectedOptions[i];
// 	}

function updateQty(element) {
	const qty = Number(element.getAttribute("qty"));

	productOptions.quantity = qty;

	const buttons = document.getElementsByClassName("btn-qty");

	for (button of buttons) {
    	button.classList.remove("btn-qtySelected");
	}
	element.classList.add("btn-qtySelected");
}


// function selectGlazing(element) {
// 	glazingOption.classList.add("hideElement");
// 	glazingOptSelected.classList.remove("hideElement");
// }

// function changeImage(element) {
// 	const buttons = document.getElementsByClassName("glazingOption");
// 	for (button of buttons) {
// 		element.classList.remove("glazingOptionSelected");
// 	}
// 	values.style.display = "block";
// }

