var number=prompt("Enter Your First Number : ");
var number1=prompt("Enter Your Last Number : ");


number=parseInt(number,10);
number1=parseInt(number1,10);

var result;

result=number+number1;
document.write(number + " + " + number1 + " = " +result+"<br/>");

result=number-number1;
document.write(number + " - " + number1 + " = " +result+"<br/>");

result=number*number1;
document.write(number + " * " + number1 + " = " +result+"<br/>");

result=number/number1;
document.write(number + " / " + number1 + " = " +result+"<br/>");

result=number%number1;
document.write(number + " % " + number1 + " = " +result+"<br/>");
