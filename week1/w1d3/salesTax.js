var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

// array of objects
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var output = {}
  // for each object (company) in the array of objects
  for (company of salesData) {
    const total = company.sales.reduce(function(sum, value) {
      return sum + value;
    }, 0);


    //tax stuff
    /*
      if output does not contain tax rates
      take sales for each company and figure out tax rate (total sales * tax)
        ex: bombardier = 800 * .05
      I then want to push that into my output[company.name] object


    */


    // if output doesn't have company
    if (output[company.name] === undefined) {
      output[company.name] = {
        totalSales: 0,
        totalTaxes: 0
      }
    }

    output[company.name].totalSales += total;
  }
  console.log(output)
  return output
}


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

/*
Add new object √
add companies to object
calculate total sales per company
calculate tax per company
*/





