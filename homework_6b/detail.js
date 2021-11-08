var product = {
	name: 0,
	quantity: 1,
	glazing: "none"
}
const checkOut = document.getElementById("checkOut");
const addToCartElement = document.getElementById("addToCart");
const cartNum = document.getElementById("numCart");

function addToCart() {
	let cartItemString = sessionStorage.getItem("cartItems");
	if (cartItemString === null) {
		var cartItems = [];
	}
	else {
		var cartItems = JSON.parse(cartItemString);
	}
	let glazing = 0; 
	let quantity = 0; 
	let name = 0;

	product.name = document.getElementById("productName").innerText;

	// addToCartElement.classList.add("hideElement"); 
	// checkOut.classList.remove("hideElement"); 


	let selectedGlazing = document.getElementsByClassName("glazingSingleOpt").name;
	let allOptions = document.getElementsByClassName('glazingSingleOpt'); 
	let allSelectedOptions = document.getElementsByClassName("glazingS");
	for (let i = 0; i < allOptions.length; i++) {
		if (allOptions[i].display === "none") {
			glazing = allOptions[i].name;
		}
	}
	cartItems.push(product);
	sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
	cartNum.innerText = cartItems.length; 
	console.log(cartItems);
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
	product.glazing = element.getAttribute("name"); 
}

function updateQty(element) {
	const qty = Number(element.getAttribute("qty"));

	product.quantity = qty;

	const buttons = document.getElementsByClassName("btn-qty");

	for (button of buttons) {
    	button.classList.remove("btn-qtySelected");
	}
	element.classList.add("btn-qtySelected");
}



