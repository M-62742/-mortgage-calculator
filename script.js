function calculatePayment() {
    const purchasePrice = parseFloat(document.getElementById('purchase-price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('term').value) * 12;
    const homeInsurance = parseFloat(document.getElementById('home-insurance').value);
    const propertyTax = parseFloat(document.getElementById('property-tax').value);
    const fideicomiso = parseFloat(document.getElementById('fideicomiso').value);
    const subServicing = parseFloat(document.getElementById('sub-servicing').value);

    const loanAmount = purchasePrice - downPayment;

    if (!loanAmount || loanAmount <= 0) {
        alert("Invalid Loan Amount");
        return;
    }

    document.getElementById('loan-amount').innerText = `Loan Amount: $${loanAmount.toFixed(2)}`;

    // Calculate the monthly mortgage payment using the standard formula for loans
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -term));

    // Add other fees
    const totalMonthlyPayment = monthlyPayment + homeInsurance + propertyTax + fideicomiso + subServicing;

    document.getElementById('monthly-payment').innerText = `Estimated Monthly Payment: $${totalMonthlyPayment.toFixed(2)}`;
}
