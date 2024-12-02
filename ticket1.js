// 1. 80% said understanding what their spending budget in £ is worth in €

// Write a JavaScript function `convertGBPtoEUR`
//  that takes in a specified amount in £,
//  and converts it to €
// using a given exchange rate. The function should return the converted amount.
function convertGBPtoEUR(pounds) {
  let euros = pounds * 1.21;
  return euros;
}

// 2. 60% said understanding what their spending budget in £ is worth in $

// 3. 10% said being able to book transport through an app

// 4. 5% said being able to book hotels through an app

// 5. 2% said getting alerts about deals on hotels they've previously seen

//MVP 2

//Write another function convertGBPtoUSD that takes in a specified amount in £, ✅
//and converts it to $ using a given exchange rate(1.27). ✅
//It should behave in a very similar way to the previous function.✅

function convertGBPtoUSD(pounds) {
 let dollars= pounds * 1.27;
 return dollars;
}
