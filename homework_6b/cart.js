let storedValue = JSON.parse(sessionStorage.getItem("cartItems"));
const cart = storedValue ? storedValue : [];
const template = document.getElementById("cartItemTemplate");
let buttons = document.getElementsByClassName("remove");

onLoadCart();

function onLoadCart() {
	let storedValue = JSON.parse(sessionStorage.getItem("cartItems"));
	for (let i = 0; i < storedValue.length; i++) {
			showProductInCart(storedValue[i]);
			let cartLen = storedValue.length;
			document.getElementById("numCart").innerText = cartLen;
	}
}

function showProductInCart(storedValue) {
	const clone = template.content.cloneNode(true);
	clone.querySelector(".itemName").innerText = storedValue.name;
	clone.querySelector("#qtyEntered").innerText = storedValue.quantity;
	clone.querySelector("#glazingEntered").innerText = storedValue.glazing;
	clone.querySelector(".itemTotalPrice").innerText = "$" + storedValue.quantity * 1.99;
	let container = document.getElementById("cartContainer");


	// const button = clone.querySelector(".remove");
	// button.addEventListener("click", function() {
	// 	const index = cart.findIndex(item => item.name === event.target.parentNode.parentNode.querySelector(".itemName").innerText);
	// 		cart.splice(index, 1); 
	// 	});

	container.appendChild(clone);

	// for (let i = 0; i < buttons.length; i++) {
	// 	let button = buttons[i]
	// 	button.addEventListener("click", function() {
	// 		let buttonClicked = event.target;
	// 		//buttonClicked.parentElement.parentElement.remove();
	// 		cart.splice(i, 1);
	// 		console.log(cart);
	// 	})
	}

let cartLen = cart.length;
document.getElementById("numCart").innerText = cartLen;
console.log(cartLen);

for (let i = 0; i < buttons.length; i++) {
	let button = buttons[i]
	button.addEventListener("click", function() {
		let buttonClicked = event.target;
		buttonClicked.parentElement.parentElement.remove();
	})
	let cartLen = storedValue.length;
	document.getElementById("numCart").innerText = cartLen;
}

orderTotal();

function orderTotal () {
	let totalPrice = 0;
	for (let i = 0; i < cart.length; i++) {
		price = cart[i].quantity * 1.99;
		totalPrice += price;
		totalPrice = Math.round(totalPrice * 100) / 100;
		document.getElementById("totalAndShippingNum").innerHTML = "$" + totalPrice;
		document.getElementById("orderTotalBoldNum").innerHTML = "$" + totalPrice;
	}
}

