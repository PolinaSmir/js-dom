const CURRENCY = {
  USD_TO_UAH: 37.65,
  EUR_TO_UAH: 40.61,
};

const converterForm = document.querySelector("#currency-converter-form");

converterForm.addEventListener("submit", convertHandler);

function convertHandler(event) {
  event.preventDefault();

  const amount = Number(document.querySelector("#amount").value);
  const currency = document.querySelector("#currency").value;

  let convertedAmount;

  const { USD_TO_UAH: usdCourse, EUR_TO_UAH: eurCourse } = CURRENCY;

  switch (currency) {
    case "USD": {
      convertedAmount = amount * usdCourse;
      break;
    }
    case "EUR": {
      convertedAmount = amount * eurCourse;
      break;
    }
    default:
      throw new Error("Congratulations you broke it");
  }

  // if (currency === "USD") {
  //   convertedAmount = amount * usdCourse;
  // } else if (currency === "EUR") {
  //   convertedAmount = amount * eurCourse;
  // } else {
  //   throw new Error("Congratulations you broke it");
  // }

  const resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = `${amount} ${currency} = ${convertedAmount.toFixed(
    2
  )} UAH`;
}
