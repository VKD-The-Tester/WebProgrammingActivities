const age = Number(prompt("Enter in a person's age: "));

/*  To enforce the boundaries I made use of the logical and operator (&&) and to satisfy the inclusive values requirement, I made sure that my conditional expressions used the greater than or equal to (>=) and less than or equal to (<=) conditions. This way we have an inclusive restricted range to work with when we are classifying what age group a person is associated with. */

if (age >= 0 && age <= 2) {
  console.log("baby");
}

if (age >= 3 && age <= 13) {
  console.log("child");
}

if (age >= 14 && age <= 19) {
  console.log("teenager");
}

if (age >= 20 && age <= 65) {
  console.log("adult");
} else {
  console.log("elder");
}
