// Initial input with provided prompts.
const count = Number(prompt("How many people are going on vacation? "));
const type = prompt("What is their group type? ").toLowerCase();
const dayOfTheWeek = prompt("What day of the week will they be staying");

// The while loop will run until the total price gets outputted to the console.
let LoopingCondition = true;

while (LoopingCondition) {
  let price = 0,
    discount = 0;

  switch (type) {
    case "Students":
      switch (dayOfTheWeek) {
        case "Friday":
          price = count * 8.45;
          break;
        case "Saturday":
          price = count * 9.8;
          break;
        case "Sunday":
          price = count * 10.46;
          break;
      }

      // The total price gets reduced by 15%, leaving only 85% which has to get paid.
      if (count >= 30) {
        discount = 0.85;
      } else {
        discount = 1;
      }

      price = price * discount;
      break;

    case "Business":
      if (count >= 100) {
        price = price - discount;
      }
      break;

    case "Regulars":
      break;
  }

  console.log(`Total price: ${price}`);
  LoopingCondition = false;
}
