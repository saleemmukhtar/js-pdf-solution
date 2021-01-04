//1st chapter//

// 1. Write a script to greet your website visitor using JS alert
// box.
//Answer//

 alert('HELLO WORLD')


// 2. Write a script to display following message on your web
// page:
//Answer//
 alert("Error!Please enter a valid password");

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)

//Answer//

 alert ("Welcome to js land... \n Happy Coding!")

// 4. Write a script to display following messages in sequence
//Answer//

  alert ("Welcome to js land...");

  alert ("Happy coding!");


// 5. Generate the following message through browser’s
// developer console:

//Amswer//

console.log ("Hello... I can run js through my web browser's console")

// 6. Make use of alerts in your new/existing HTML & CSS
// project.
// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


//1st chapter end//

//2nd assignment//

// 1. Declare a variable called username.
//Answer//
 var username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.
//ANSWER//
 var myName="SALEEM MUKHTAR";
 alert (myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

//ANSWER//

 var message="Hello world!";
 alert (message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

//ANSWER//
var stname="SALEEM";
var dob="12th AUGUST";
var cert="CERTIFIED MOBILE APPLICATION DEVELOPMENT";
alert (stname);
alert (dob);
alert (cert);

// // 5. Write a script to display the following alert using one JS
// // variable:

//ANSWER//

var x= (" pizza \n pizz \n piz \n pi \n p")   
alert (x);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

//ANSWER//

var a= "My email address is"
var email=" example@example.com"
var b= a+email;
alert (b);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

//ANSWER//

var a="I am trying to learn from the book";
var book=" A smater way to learn JAVASCRIPT";
var c=a+book;
alert (c);

// 8. Write a script to display this in browser through JS

//ANSWER//
 document.write ("Yah! I can write HTML content through JavaScript");

// 9. Store following string in a variable and show in alert and
// browser through JS

//ANSWER//

 var a="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
 alert (a);

//2nd chp end//

//assginment 3//

//  1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

//ANSWER//

 var age= "I am 24 years old";
 alert (age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

//ANSWER//

var a="saleem"
var b="You have visited a site 2 times"
alert (a);
alert (b);

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

//Answer//

var birthyear = 1996
document.write ("My birth year is" +birthyear+ "<br />Data type of my decleared variable is number ")

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

//ANSWER//
var a= "Saleem"
var b=" T-shirts"
var c=" ordered 2"
var d=" from unofficial.com"
var e=a+c+b+d;
document.write(e);

//chp3 end//

//chp 4 start//

// 1. Declare 3 variables in one statement.
//ANSWER//

 var a=b=c= "3 variables";
 alert (c);

// 2. Declare 5 legal & 5 illegal variable names.
// legal variables//
//ANSWER//
// Uppercase letter (Lu)
//var A;
// Lowercase letter (Ll)
//var a;
// Titlecase letter (Lt)
//var Ab;
// Modifier letter (Lm)
//var Amm;
// Letter number (Nl)
//var a5;

//illegal variables//
// var space;
// var Nameofband;
// var "saad";
// var P2_a%88$;
// var 123;

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

//ANSWER//
var a= `Rules for naming JS variables. <br />`;
document.write (a);
var b=`Variable names can only contain letters,numbers, dollar signs, and underscores. <br />`
document.write (b);

var c= `Variables must begin with a letter,underscore or dollar sign. <br />`
document.write (c);

var d= ` Variable names are case sensative <br />`
document.write (d);

var e= `Variable names should not be JS keywords`
document.write (e)

//chp 4 end//

//CHP 5//
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

//ANSWER//

 var a= 5;
 var b= 10;
 var c= a+b;
 document.write('sum of  '+ a+' &'+ b+' is'+(c));

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
//ANSWER//
subtract//
var a= 5;
  var b= 10;
  var c= a-b;
  document.write('sum of  '+ a+' &'+ b+' is '+(c));

//multiply//
var a= 5;
  var b= 10;
  var c= a*b;
  document.write('sum of  '+ a+' &'+ b+' is '+(c));

//division//
var a= 5;
  var b= 10;
  var c= a/b;
 document.write('sum of  '+ a +' &'+ b +' is '+( c ));

//modulus//
var a= 5;
  var b= 10;
  var c= a % b;
  document.write('sum of  '+ a +' &'+ b +' is '+( c ));

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

//ANSWER//

var a 
document.write("Value after variable declaration is: " +a+ "</br>")
a = 5
document.write("Initial value: " +a+ "</br>")
a++
document.write("Value after increment is: " +a+ "</br>")
a= a+7
document.write("Value after addition is: " +a+ "</br>")
a--
document.write("Value after decrement is: " +a+ "</br>")
a = a%3
document.write("The remainder is: " +a+ "</br>")

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie

//ANSWER//

var cost = 600
var movie = cost*5
document.write ("Total cost to buy 5 tickets to a movie is " +movie+ " PKR") 

// 5. Write a script to display multiplication table of any
// number in your browser

//ANSWER//

var a = 5
var b = a*1
document.write ("5 X 1 =" +b+ "<br />")
var c = a*2
document.write ("5 X 2 =" +c+ "<br />")
var d = a*3
document.write ("5 X 3 =" +d+ "<br />")
var e = a*4
document.write ("5 X 4 =" +e+ "<br />")
var f = a*5
document.write ("5 X 5 =" +f+ "<br />")
var g = a*6
document.write ("5 X 6 =" +g+ "<br />")
var h = a*7
document.write ("5 X 7 =" +h+ "<br />")
var i = a*8
document.write ("5 X 8 =" +i+ "<br />")
var j = a*9
document.write ("5 X 9 =" +j+ "<br />")
var k = a*10
document.write ("5 X 10 =" +k+ "<br />")

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

//ANSWER//

var a = 25 
var b = (a * 9/5)+32
document.write (+a+ " <sup>0</sup> C is " +b+ "<sup> 0</sup> F");

// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

//ANSWER//

var c = 70
var d = (c-32) * 5/9
document.write (+c+ " <sup>0</sup> F is " +d+ "<sup> 0</sup> C")

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

//ANSWER//

var a = 600
document.write ("Price of item 1 is " +a+ "<br />")
document.write ("Quantity of Item 1 is 3 <br />")
var b = 50
document.write ("Price of item 2 is " +b+ "<br />") 
document.write ("Quantity of Item 2 is 7 <br />")
var c = 100
document.write ("Shipping charges is " +c+ "<br /> <br /> <br />")

var d = a*3+b*7+c
document.write ("Total cost of your order is " +d+ "<br />")


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

//ANSWER//

var tmarks = 500
document.write ("Total marks " +tmarks+ "<br />")
var marks = 365
document.write ("Marks obtained " +marks+ "<br />")
var per = marks*100/tmarks
document.write ("Percentge" +per+ "<br />")

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 160.99 Pakistani Rupee
// and 1 Saudi Riyal = 42.92 Pakistani Rupee)

//ANSWER//

var dollar = 10
var riyal = 25

document.write ("The Currency in PKR is " + (dollar*160.99+riyal*42.92) + "<br />")

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

//ANSWER//

var a = 5
document.write ((a+5)*10/2)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

//ANSWER//

var x = 2020
document.write("Current year " +x+ "<br />")
var y =1996
document.write("Birth year " +y+ "<br />")
var z = x-y
document.write("Your age is  " +z+ "<br />")

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

//ANSWER//

var radius = 20
document.write ("Radius of circle is " +radius+ "<br />")
var pi = 3.142
document.write ("The Circumference is " +(2*pi*radius)+ "<br />")
document.write ("The area is " +(pi*radius*radius)+ "<br />")

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life

//ANSWER//

var snack = "lays"
document.write ("Favourite snack is: " +snack+ "<br />")
var age = 24
document.write ("Current age: " +age+ "<br />")
var maxage = 50
document.write ("Estimated maximum age: " +maxage+ "<br />")
var day = 10
document.write ("Amount of snack per day is " +day+ "<br />")
document.write ("You wil need " + (maxage-age)*day + " lays to last you until the ripe old age of 50 <br />")


//chp#5 end///

//chp 6-9 start//

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

//ANSWER//

var a = 10
document.write ("Result: <br />The value of a is: " +a+ "<br /> <br /> ---------------------------- <br />")

++a
document.write ("The value of ++a is: " +a+ " <br />")
document.write ("Now the value of a is: " +a+ " <br /> <br />")

document.write ("The value of a++ is: " +a+ " <br />")

a++
document.write ("Now the value of a is: " +a+ " <br /> <br />")

--a
document.write ("The value of --a is: " +a+ " <br />")
document.write ("Now the value of a is: " +a+ " <br /> <br />")

a--
document.write ("The value of a-- is: " +a+ " <br />")
document.write ("Now the value of a is: " +a+ " <br />")

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

//ANSWER//

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

--a 
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
document.write ("Value of a " +a+ "<br />")
document.write ("Value of b " +b+ "<br />")
document.write ("Value of result is " +result+ "<br />")

// 3. Write a program that takes input a name from user &
// greet the user.

//ANSWER///

var a = prompt("Enter your name")
alert ("Hello" +a+ "")

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default

// ANSWER //

var num = prompt("Enter Number")
var i = 0;
for (i = 1; i <= 10; i++) {
document.write( + num + " x " + i + " = " + num * i + " <br />");
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

//ANSWER//

var sub1 = prompt("Enter First Subject Name")
var sub2 = prompt("Enter Second SUbject Name")
var sub3 = prompt("Enter Third SUbject Name")
var sub1Marks = prompt("Enter First Subject Marks")
var a = Number(sub1Marks)
var sub2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2Marks)
var sub3Marks = prompt("Enter Third Subject Marks")
var c= Number(sub3Marks)
var totalMarks = 100

document.write(
              "<table>"+
              "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
              "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
              "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
             "</table>"
             )

//END CHP 6-9 //

//START chp 9-11//

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

//Answer//

var a = prompt ("Enter city name")

if(a==="Karachi"){
    document.write ("Welcome to the city of light" )
}
else {
    document.write (`Please use camel way `)

}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

//ANSWER//

var a = prompt ("Input your gender")
if(a==="Male"){
        document.write ("Good morning Sir" )
    }
    else if(a==="Female") {
        document.write ("Good morning Ma'am")

    }else{
        document.write ("Chal mera puttar to chutti kar")
    }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var a = prompt ("Input a colour")
if(a==="red"){
            document.write ("Must Stop" )
        }
        else if(a==="yellow") {
            document.write ("Ready to move")

        }else if(a==="green"){
            document.write ("Move now")
        }else{
            document.write ("Use lower case")

        }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

//ANSWER//

var x = prompt("How much currently fuel is remaining in your car")

if (x > "0.25 liters") {
    document.write("Keep going")
}
else {
    document.write ("Please refill the fuel in your car")

}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//SCRIPT//
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

//Answer//

var a = prompt ("Marks obtained in 3 subjects")
var b = prompt ("Enter Total marks")
var per = a*100/b
document.write ("your percentage is " +per+ "<br />")
if(per>=80){
    document.write ("<b>Grade</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A-one <br />")
    document.write ("<b> Remarks </b> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbspExcellent")

}else if (per>=70){
    document.write ("<b>Grade</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A <br />")
    document.write ("<b> Remarks </b> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbspGood")
}    else if (per>=60){
        document.write ("<b>Grade</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B <br />")
        document.write ("<b> Remarks </b> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbspYou need to improve")
    }else if (per<60){
        document.write ("<b>Grade</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fail <br />")
        document.write ("<b> Remarks </b> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbspSorry")

    }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var a = prompt ("Enter any number to guess the secret number")
// var secret = 5
// if (secret == a){
//     Document.write ("Bingo! Correct answer <br />")
// }else if (a+1 == number){
//     alert("Close enough to the correct answer")
// }

// else{
//     alert("You lost!")
// }

//Answer//

var number = 4
var userInput = +prompt("Enter the number")
if (number==userInput){
    alert("BINGO! Correct Answer")
}

else if (userInput+1==number){
    alert("Close enough to the correct answer")
}

else{
    alert("You lost!")
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

//Answer//

var div = +prompt ("Enter the no")
if (div % 3 == 0){
    alert ("The number is divisible by 3")
} else {
    alert ("Not divisible")
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

//Answer//

var x = +prompt ("Enter the number")
if (x % 2 == 0){
    alert ("The given number is even")
    
}else if (x % 2 !==0) {
    alert ("The given number is odd")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//ANSWER//

var t = +prompt ("Enter Temperature Here!")
if (t > 40){
    alert ("Its too hot outside")
}else if (t > 30){
    alert ("The Weather today is Normal.")

}else if (t > 20){
    alert ("The Weather today is Cool.")
}else if (t > 10){
    alert ("OMG! Today’s weather is so Cool.")
}else {
    alert ("Select suitable temperature")
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//Answer//

var a = +prompt ("Enter 1st number")
var b = +prompt ("Enter 2nd number")
var c = prompt  ("Enter the operation")
if (c == "+"){
    alert ("Your result = "+(a+b)+ "")
}else if  (c == "-"){
    alert ("Your result = "+(a-b)+ "")
}else if (c == "*"){
    alert ("Your result = "+(a*b)+ "")
}else if (c == "/"){
    alert ("Your result = "+(a/b)+ "")
}
else if (c == "%"){
    alert ("Your result = "+(a%b)+ "")
}

//Chp 9-11 End//

//Chp 12-13 Start //

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)

//Answer//


var userInput = prompt("Enter a Character or number")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90){
    alert("you input a Capital letter")
} else if (ascii >= 97 && ascii <=122){
    alert("you input a Small letter")
}else if (ascii >= 48 && ascii <=57){
    alert("you input a number")
}
 else{
    alert ("Please check the input")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//Answer//

var input1 = +prompt("Enter the  1st Integer ")
var input2 = +prompt("Enter the  2st Integer ")
if (input1 > input2){
    alert (+input1+"  1st integer is larger")
}else if (input1 < input2){
    alert (+input2+"  2nd integeris larger")
}else if (input1 == input2){
    alert (" Both integers are equal")
}else{
    alert ("Enter the integers values")
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

//ANSWER//
var input = +prompt ("Enter the value")
if (input > 0){
    alert ("The value is positive")
}else if (input < 0){
    alert ("The value is negative")
}else if (input == 0){
    alert ("The value is 0")

}else {
    alert ("Value should be an integer")
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

//Answer//

var input = prompt ("Enter a string value of length 1")
if (input === "a" || input === "e" ||input === "i" ||input === "o" ||input === "u"){
    alert ("True")
}else {
    alert ("False")

}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

//Answer//

var user = prompt ("Enter a password")
var pass = "saleem123"
if (user === ""){
    alert ("please enter a password")
}else if (user === pass){
    alert ("Correct! The password you entered matches the original password")
}else{
    alert ("Incorrect password")
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//Answer//

var hour = 13
if (hour < 18) {
alert ("Good day")
}else{
alert ("Good evening");
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

//Answer//

var time = +prompt ("Enter time in 24 hours clock format like: 1900 = 7pm")
if (time >= 0000 && time < 1200){
    alert ("Good morning ")
}else if (time >= 1200 && time < 1700){
    alert ("Good afternoon")
}else if (time >= 1700 && time < 2100){
    alert ("Good evening")
}else if (time >= 2100 && time < 2359){
    alert ("Good night")
}

//chp 12-13 end//

//chp 14-16 start//

// 1. Declare an empty array using JS literal notation to store
// student names in future.

var literalArray = [];

// // 2. Declare an empty array using JS object notation to store
// // student names in future.


var objectArray = [];

// // 3. Declare and initialize a strings array.

 var stringArray = ["saleem", "osama", "fahad"];

// // 4. Declare and initialize a numbers array.

 var numberArray = [1,2,3,4,5];

// // 5. Declare and initialize a boolean array.

 var booleanArray = [true,false];

// // 6. Declare and initialize a mixed array.

 var mixedArray = ["a",123,"true","karachi"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

//Answer//

var education = ["SSC ","HSC","BCS", "BS", "BCOM", "MS", "M. Phil","PhD"]
document.write("<h1>Qualification</h1> <br />")
for (var i = 0; i <=education.length; i++){
    document.write(i+1+ ")  "+education[i]+"<br/>")
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

//Answer//

var studentName = ["Micheal","John", "Tony"]
var score = [320,230,480];
var percentage = [];
for(var i = 0; i <=2; i++){
    percentage[i] =  score[i] / 500 * 100

}

for (var a = 0; a<=2; a++){
document.write("score of "+studentName[a]+" is "+score[a]+"Precentage "+percentage[a]+"% <br/>")
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

//Answer//

var color = ["blue"," pink"," green"]
document.write (color + "<br />");
var add = prompt("What colour do you want to add in the beginning")
color.unshift (add);
document.write (color + "<br />");
var end = prompt("What colour do you want to add in the end")
color.push (end);
document.write (color + "<br />");
var add1 = prompt("What 1st colour again do you want to add in the beginning")
var add2 = prompt("What 2nd colour again do you want to add in the beginning")
color.unshift (add1);
color.unshift (add2);

document.write (color + "<br />");
color.shift (add2);
document.write (color + "<br />");
color.pop (add2);
document.write (color + "<br />");

var index = +prompt ("Write the index number where you want to add the color")
var desire = prompt ("Write the Color name")
color.splice(index,0,desire)
document.write(color+"<br/>");

var dlt = +prompt("At which index do you want to delete color?")
var updated = +prompt(" which color do you want to delete on that index ?")
color.splice(dlt, updated);
document.write(color+"<br/>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

//Answer//

var score = [320,230,480,120]
score.sort();
document.write ("Ordered scores of students: " +score+ "")

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

//Answer//

var cities = ["Karachi","Lahore","Multan","Islamabad","Peshawar"];
document.write ("Cities list <br />"+cities + "<br />")
var selectedCities = cities.slice (2,4)
document.write ("Selected cities list <br />"+selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

//Answer//

var arr = ["This ", " is ", " my ", " cat "];
document.write ("<h1>ARRAY</h1> <br />" +arr+ "<br />")
var string = arr.join(" ");
document.write ("<h1>STRING</h1> <br />" +string )

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//Answer//

var device = ["keyboard","mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("out : <br/>"+fourthDevice+"<br/>")

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

//Answer//

var device = ["keyboard","mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.pop()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.pop()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.pop()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.pop()
document.write("out : <br/>"+fourthDevice+"<br/>")

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

//Answer//

var mobiles = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write(
    "<select>"+
    "<option>"+mobiles[0]+"</option>"+
    "<option>"+mobiles[1]+"</option>"+
    "<option>"+mobiles[2]+"</option>"+
    "<option>"+mobiles[3]+"</option>"+
    "<option>"+mobiles[4]+"</option>"+
    "<option>"+mobiles[5]+"</option>"+

    "</select>")

//Chp 14-16 End//


//chp 17-20 Start //

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

//Answer//

 var arr = [[],[],[]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

//Answer//

 arr[0] =   [0,1,2,3]
 arr[1] =   [1,0,1,2]
 arr[2] =   [2,1,0,1]

// document.write (arr[0]+"<br />" +arr[1]+ "<br />" +arr[2]+ "<br />")

// 3. Write a program to print numeric counting from 1 to 10.

//Answer//

var arr = [1,2,3,4,5,6,7,8,9,10]
for (i=0; i < arr.length; i++){
    document.write (+arr[i]+"<br />")
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

//ANSWER//

var table = +prompt("Enter a number  to show its multiplication table");
var length = +prompt("Enter Multiplication table" );
document.write("Multiplication Table of " +table+"<br/> length"+length+ "<br/>")
for(var i = 1; i <= length; i++){
    document.write(table+" x "+i+" = "+table*i+"<br/>")
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

//Answer//

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var arr = fruits.length
for(var i = 0; i <arr; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br/>")
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//Answer//

var num = [];
var odd = [];
var even = [];
var series = [];

for(var i = 0; i <15; i++){
    num[i] = i+1;
}
document.write("counting :"+num+"<br/>")
document.write(" Reverse counting :"+num.reverse()+"<br/>")

for(var a = 1; a <= 20; a++){
    if(a % 2 ===0){
        even[a] = a;
    }
}
document.write("Even :"+even+"<br/>")
for(var b = 1; b <= 20; b++){
    if(b % 2 !== 0){
        odd[b] = b;
    }
}
document.write("Odd :"+odd+"<br/>")
for(var d = 1; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d+"k";
    }
}
document.write("Series :"+series+"<br/>")

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not

//Answer//

var user = prompt ("Welcome to ABC bakery.. What you want to order?")

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var b = bakery.indexOf(user)
if(b<0){
    alert("we are sorry "+user+"is not available in our bakery")
}
else{
    alert(user+"is available at index "+b+" in our bakery") 
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

//Answer//

var a= [24, 53, 78, 91, 12]
var max = Math.max.apply(Math,a)
var min = Math.min.apply(Math,a)
document.write("Array items: "+a+"<br/> The largest number is " +max+"<br/> The samllest number is " +min)

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

//Answer//

var a = [24, 53, 78, 91, 12]
var min = Math.min.apply(Math,a)
document.write("Array items:<br/> "+a+"<br /> The samllest number is  <br/>" +min)

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

//Answer//

for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+" ,")
    }
}



