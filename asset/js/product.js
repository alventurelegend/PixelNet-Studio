document.addEventListener("DOMContentLoaded", () => {
  // Data dummy
  const dummyData = [
    { id: 1, title: "Online Shop", gambar: "../asset/images/product1.png" },
    { id: 2, title: "ID Card Bisnis", gambar: "../asset/images/product2.svg" },
    { id: 3, title: "Pamflet Produk", gambar: "../asset/images/product3.svg" },
    { id: 4, title: "Paket Merdeka", gambar: "../asset/images/product4.svg" },
    { id: 5, title: "Design Lanyard", gambar: "../asset/images/product5.png" },
    { id: 3, title: "Pamflet Produk", gambar: "../asset/images/product3.svg" },
    { id: 4, title: "Paket Merdeka", gambar: "../asset/images/product4.svg" },
    { id: 1, title: "Online Shop", gambar: "../asset/images/product1.png" },
    { id: 2, title: "ID Card Bisnis", gambar: "../asset/images/product2.svg" },
    { id: 3, title: "Pamflet Produk", gambar: "../asset/images/product3.svg" },
    { id: 4, title: "Paket Merdeka", gambar: "../asset/images/product4.svg" },
    { id: 5, title: "Design Lanyard", gambar: "../asset/images/product5.png" },
    { id: 3, title: "Pamflet Produk", gambar: "../asset/images/product3.svg" },
    { id: 4, title: "Paket Merdeka", gambar: "../asset/images/product4.svg" },
  ];

  displayEvent(dummyData);
});

function displayEvent(data) {
  const EventSetCollection = document.getElementsByClassName("product-release");
  if (EventSetCollection.length === 0) {
    console.error("Elemen dengan class 'week-event' tidak ditemukan.");
    return;
  }

  const targetElement = EventSetCollection[0];
  targetElement.innerHTML = "";

  if (data.length === 0) {
    targetElement.innerHTML =
      '<div class="no-data-message" style="color:white;">Belum ada Produk yang tersedia....</div>';
    return;
  }

  // buat grid
  targetElement.classList.add("grid-container");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
    <style>
    .grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  background: #ffffffff;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 1s ease-in-out;
}

.product-card :hover {
  transform: scale(1.3);
}

.card-image {
  background: #ffffffff;
  height: 150px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.card-image img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}

.card-footer {
  background: #d3b700ff;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 0;
}
</style>
      <div class="card-image">
        <img src="${item.gambar}" alt="${item.title}">
      </div>
      <div class="card-footer">
        <p class="product-name">${item.title}</p>
      </div>
    `;

    targetElement.appendChild(card);
  });
}
