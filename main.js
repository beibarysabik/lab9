let rect_perim = function (length, width) {
	result = (length+width)*2
	return result
}


let odd_even = function (x) {
	if (x%2==0){
		console.log ("The given number is even.")
	}

	else {
		console.log ("The given number is odd.")
	}
}

let pos_neg = function (y) {
	if (y>0){
		console.log ("The given number is positive.")
	}
	else {
		console.log ("The given number is negative.")
	}
}

let equality = function (a,b) {
	if (a-b==0){
		console.log ("Given numbers are equal.")
	}
	else if (a-b>0){
		console.log ("Given numbers are not equal: the first number is greater than the second number.")
	}	
	else {
		console.log ("Given numbers are not equal: the second number is greater than the first number.")
	}
}

let between = function (w) {
	if (w>0 && w<1){
		console.log ("The given number is between 0 and 1.")
	}
	else {
		console.log ("The given number is NOT between 0 and 1.")
	}
}

let weekdays = function (wd) {
	if (wd==1){
		console.log ("It is Monday.")
	}
	else if (wd==2) {
		console.log ("It is Tuesday")
	}
	else if (wd==3) {
		console.log ("It is Wednesday")
	}
	else if (wd==4) {
		console.log ("It is Thursday")
	}
	else if (wd==5) {
		console.log ("It is Friday")
	}
	else if (wd==6) {
		console.log ("It is Saturday")
	}
	else if (wd==7) {
		console.log ("It is Sunday")
	}
	else {
		console.log ("There is only seven days in the week, you stupid")
	}
}

let area_circle = function (radius) {
	let pi = 3.14
	area = pi * radius * radius
	return area
}

function greeting(name) {
	return "Hello " + name + "!";
}

let hello_world = function () {
	let hw = "Hello world!\nHello world!\nHello world!"
	console.log (hw)
}

let ratio = function (fr,qw) {
	ratio = fr/qw
	return ratio
}

let sum_of_sq = function (a,b) {
	sum_of_sq = a*a+b*b
	return sum_of_sq
}

let product = function (a,b,c) {
	product = a*b*c
	return product
}

let convert = function (tenge) {
	dollars = 470*tenge
	return dollars
}

let gr_of_two = function (a,b) {
	if (a>b) {
		console.log(a+" is the greatest among two numbers")
	}
	else if (b>a) {
		console.log(b+" is the greatest among two numbers")
	}
	else {
		console.log ("Given numbers are equal")
	}
}

let gr_of_three = function (a,b,c) {
	if (a>=b&&a>c) {
		console.log(a+" is the greatest among three numbers")
	}
	else if (b>a&&b>c) {
		console.log(b+" is the greatest among three numbers")
	}
	else {
		console.log(c+" is the greatest among three numbers")
	}
}