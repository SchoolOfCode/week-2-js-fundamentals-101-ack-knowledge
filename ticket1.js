// 1. 80% said understanding what their spending budget in £ is worth in €

// Write a JavaScript function `convertGBPtoEUR`
//  that takes in a specified amount in £,
//  and converts it to €
// using a given exchange rate. The function should return the converted amount.

//MVP 1

function convertGBPtoEUR(pounds) {

  let euros = pounds * 1.21;

  return euros;
}

// 2. 60% said understanding what their spending budget in £ is worth in $

//Write another function convertGBPtoUSD that takes in a specified amount in £, ✅
//and converts it to $ using a given exchange rate(1.27). ✅
//It should behave in a very similar way to the previous function.✅

//MVP 2

function convertGBPtoUSD(pounds) {

  let dollars = pounds * 1.27;

  return dollars;
}


// Write a function `convertGBPToCurrency` 
// which takes in both a currency code (`"EUR"` or `"USD"`) 
// and an amount of £ to convert. EUR 5
// It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. 
// If an unknown code is entered, it should return `null`.

// user inputs code (EUR or USD)
// define varibles code EUR -> exhcange rate

//let EUR = convertGBPtoEUR(pounds); 
//let USD = convertGBPtoUSD(pounds);


// exchange rate will be multiplied by the user amount and return GBP conversion

function convertGBPToCurrency(code, value) {

  if (code === "EUR") {
    return convertGBPtoEUR(value);
  }     
  else if  (code === "USD"){
    return convertGBPtoUSD(value);
  }
  else return null
} 

// 3. 10% said being able to book transport through an app

// 4. 5% said being able to book hotels through an app

// 5. 2% said getting alerts about deals on hotels they've previously seen





