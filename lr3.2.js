function Car(make, model, year, color, mileage) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.mileage = mileage;
}

Car.prototype.displayCarData = function() {
	if (make != ""){
	let carData = "<p>Марка: " + this.make + "</p>";}
	else
		{carData = " "}
	carData += "<p>Модель: " + this.model + "</p>";
	carData += "<p>Год выпуска: " + this.year + "</p>";
	carData += "<p>Цвет: " + this.color + "</p>";
	carData += "<p>Пробег: " + this.mileage + "</p>";

	document.getElementById("carData").innerHTML = carData;
}

function createCar() {
	let make = document.getElementById("make").value;
	let model = document.getElementById("model").value;
	let year = document.getElementById("year").value;
	let color = document.getElementById("color").value;
	let mileage = document.getElementById("mileage").value;

	let car = new Car(make, model, year, color, mileage);
	car.displayCarData();
}