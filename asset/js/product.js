document.addEventListener("DOMContentLoaded", () => {
  // Data dummy
  const dummyData = [
    { id: 1, 
      title: "Design Lanyard SMANSUK", 
      gambar: "../asset/images/porto01.webp" },
    {
      id: 2,
      title: "Design Lanyard PMR Twosra",
      gambar: "../asset/images/porto02.webp",
    },
    {
      id: 3,
      title: "Cue MC Osis SMK PGRI Sragen",
      gambar: "../asset/images/porto03.webp",
    },
    { id: 4, 
      title: "Design Lanyard Rohis", 
      gambar: "../asset/images/product15.webp" },
    {
      id: 5,
      title: "Price Produk ID Card",
      gambar: "../asset/images/porto04.webp",
    },
    {
      id: 6,
      title: "Price Produk Lanyard",
      gambar: "../asset/images/porto05.webp",
    },
    {
      id: 8,
      title: "Design Website Static",
      gambar: "../asset/images/product17.webp",
    },
    { id: 9, 
      title: "Design Box", 
      gambar: "../asset/images/product9.webp" },
    {
      id: 10,
      title: "Kaos Karyawan",
      gambar: "../asset/images/product10.webp",
    },
    {
      id: 11,
      title: "Desain Gerobak",
      gambar: "../asset/images/product11.webp",
    },
    {
      id: 13,
      title: "Desain & Cetak MMT",
      gambar: "../asset/images/product1.webp",
    },
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
    margin-top: 3rem;
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
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 1s ease-in-out;
}

.card-image {
  background: #ffffffff;
  height: 150px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}


.card-image img {
 height: 150px;
  width: 140px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 5px;
}

.card-footer {
  height: 50px;
  background: #d3b700ff;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  overflow: hidden;
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
