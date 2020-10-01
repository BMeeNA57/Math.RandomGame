function numTest() {
  var number = document.getElementById("pickNumber").value;
  var rand = Math.floor(Math.random() * 20)
  if (number == "") {
    document.write("Please enter a number");
    console.log(null);
  } else if (number < rand ) {
    document.write("Your number is less than ours. Our number was... ");
    document.write(rand);
    console.log(number);
  } else if (number > rand ) {
    document.write("Your number is greater than ours. Our number was... ");
    document.write(rand);
    console.log(number);
  } else {
    document.write("Your number is the same as ours!!");
  }
}
