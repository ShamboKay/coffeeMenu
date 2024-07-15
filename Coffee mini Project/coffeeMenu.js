function currencyChange() {
    const exchangeRate = {
        GBP: 1,
        USD: 1.3,
        EUR: 1.15,
    };

    const selectedCurrency = document.getElementById('currencySelector').value;
    let currencies = document.querySelectorAll(".currencyChange");
    let prices = document.querySelectorAll(".priceChange");

    prices.forEach((price, i) => {

      let originalPrice = parseFloat(price.getAttribute("data-gbp"));
        
    
     if (!originalPrice) {
            originalPrice = parseFloat(price.innerText);
            price.setAttribute("data-gbp", originalPrice);
        }

        let convertedPrice;
        let currencySymbol;

        if (selectedCurrency === "USD") {
            convertedPrice = (originalPrice * exchangeRate.USD).toFixed(2);
            currencySymbol = "$";
        } else if (selectedCurrency === "EUR") {
            convertedPrice = (originalPrice * exchangeRate.EUR).toFixed(2);
            currencySymbol = "€";
        } else {
            convertedPrice = originalPrice.toFixed(2);
            currencySymbol = "£";
        }
       
        price.innerText = convertedPrice;
        currencies[i].innerText = currencySymbol;

    });
}

document.getElementById('currencySelector').addEventListener('change', currencyChange);
document.addEventListener('DOMContentLoaded', currencyChange);
