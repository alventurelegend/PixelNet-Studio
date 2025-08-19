class footer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
       
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

       
        footer {
        width: 100%;
        background-color: white;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
        color: #6a6a6a;
        }

        footer a {
        text-decoration: none;
        }
      </style>
     <footer>
      <p>
        &copy; 2025 PixelNet by Pixel Studio Team. Hak Cipta Dilindungi.
        <a href="component/page/privacy.html">Privacy Policy</a>
      </p>
    </footer>
    `;
  }
}

customElements.define("my-footer", footer);
