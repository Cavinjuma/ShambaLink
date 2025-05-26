// Sample data for demo purposes
const marketPrices = [
  { produce: "Tomatoes", price: 50, location: "Nairobi" },
  { produce: "Maize", price: 35, location: "Eldoret" },
  { produce: "Onions", price: 45, location: "Kisumu" }
];

// Load market prices
function loadPrices() {
  const pricesDiv = document.getElementById('prices');
  pricesDiv.innerHTML = marketPrices.map(item =>
    `<p><strong>${item.produce}</strong> - KES ${item.price}/kg (${item.location})</p>`
  ).join('');
}

// Handle produce listing
document.getElementById('produceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('produceName').value;
  const qty = document.getElementById('quantity').value;
  const price = document.getElementById('price').value;
  alert(`Produce listed: ${name} - ${qty}kg @ KES ${price}/kg`);
  // Later, we’ll send this data to a backend API
});

loadPrices();
// Nearby buyers or markets (sample data)
const nearbyMarkets = [
  { name: "Wakulima Market", location: "Nairobi", contact: "+254706678699" },
  { name: "Kibuye Market", location: "Kisumu", contact: "+254700005521" },
  { name: "Eldoret Wholesale", location: "Eldoret", contact: "+254755553553" }
];

// Load nearby markets
function loadMarkets() {
  const marketDiv = document.getElementById('marketList');
  marketDiv.innerHTML = nearbyMarkets.map(market =>
    `<div class="market-card">
      <strong>${market.name}</strong><br>
      Location: ${market.location}<br>
      Contact: <a href="tel:${market.contact}">${market.contact}</a>
    </div>`
  ).join('');
}

// Save and display produce listings
const myProduce = [];
// Submit produce to localStorage
document.getElementById("produceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("produceName").value;
  const quantity = document.getElementById("produceQty").value;
  const price = document.getElementById("producePrice").value;

  const farmer = JSON.parse(localStorage.getItem("farmerUser")) || {
    name: "Unknown",
    phone: "+254700000000",
    location: "Unknown"
  };

  const newProduce = {
    name,
    quantity,
    price,
    farmer
  };

  // Save to localStorage
  const saved = JSON.parse(localStorage.getItem("produceList")) || [];
  saved.push(newProduce);
  localStorage.setItem("produceList", JSON.stringify(saved));

  alert("Produce listed successfully!");
  document.getElementById("produceForm").reset();
});


// Load initial data
loadPrices();
loadMarkets();
