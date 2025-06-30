//Q3-> You need to calculate the tax amount on his salary by using the Js switch control flow. 
function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            console.log("Invalid salary input");
            return;
    }
    let taxAmount = salary * taxRate;
    console.log(`Tax on salary ₹${salary} is ₹${taxAmount}`);
    return taxAmount;
}

//  This line triggers the function with ₹755555 salary
findTax(755555);
