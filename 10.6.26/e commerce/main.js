
function showProduct(name, price){

    const shipping = 15;
    const tax = price * 0.10;
    const total = price + shipping + tax;

    document.getElementById("productName").innerText = name;
    document.getElementById("productPrice").innerText = "$" + price;
    document.getElementById("tax").innerText = "$" + tax.toFixed(2);
    document.getElementById("total").innerText = "$" + total.toFixed(2);

    document.getElementById("cartModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("cartModal").style.display = "none";
}

window.onclick = function(e){
    const modal = document.getElementById("cartModal");
    if(e.target === modal){
        modal.style.display = "none";
    }
}