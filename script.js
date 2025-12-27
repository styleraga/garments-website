const SHEET_ID = 1Z9WOaTbtrk54xzYZxjo_gdP2Xbf7AsWZuThs49vi53k;
const SHEET_NAME = "Sheet1";

let allProducts = [];

fetch(`https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`)
  .then(res => res.json())
  .then(data => {
    allProducts = data.filter(p => p.Stock === "yes");
    showCategory("all");
  });

function showCategory(category) {
  const products = document.getElementById("products");
  products.innerHTML = "";

  allProducts.forEach(p => {
    if (category === "all" || p.Category === category) {
      products.innerHTML += `
        <div class="product">
          <img src="${p.ImageURL}">
          <h4>${p.ProductName}</h4>
          <p>৳${p.Price}</p>
        </div>
      `;
    }
  });
}

function showContact() {
  document.getElementById("products").innerHTML = `
    <div class="contact">
      <h2>Contact Us</h2>
      <p>Phone: 01XXXXXXXXX</p>
      <p>WhatsApp Available</p>
    </div>
  `;
}
