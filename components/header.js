const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
      h1, h2, h3, h4, p, a, b, span, li {
          font-family: 'Rubik';
          font-style: normal;
          -webkit-font-smoothing: antialiased;
      }
      header {
          margin: 0 auto;
          width: 100%;
          max-width: 1080px;
      }

      header img.logotype {
          width: 144px;
          height: 72px;
      }

      header img.menu {
          width: 24px;
          height: 24px;
      }

      header .topnav {
          margin: 40px 24px;
          padding: 0;
          text-align: left;
          overflow: hidden;
      }

      header a {
          display: block;
          float: left;
          color: black;
          text-decoration: none;
          padding: 8px 0;
          font-weight: 500;
          margin: 20px 48px 0 0;
      }

      header a:hover {
          color: #F25CBE;
          transition-duration: .3s;
          transition-property: color;
          transition-timing-function: cubic-bezier(.4,0,.2,1);
      }

      header a:nth-child(1):hover {
          border-bottom: none;
      }

      header a:nth-child(1) {
          margin: 0 48px 0 0;
      }

      @media screen and (max-width: 600px) {
          .topnav a:not(:first-child) {
              display: inline-block;
              width: 24%;
          }
          .topnav a.icon {
              float: none;
              display: block;
              position: absolute;
              top: 0;
              right: 0;
          }
          header a:nth-child(1) {
              margin: 0;
          }
          header a {
              margin: 0;
              float: none;
          }
          header .topnav {
              margin: 16px 16px 0 16px;
          }
      }

      @media screen and (max-width: 600px) {
          header .topnav {
              position: relative;
              text-align: center;
          }
          .topnav.responsive .icon {
              position: absolute;
              right: 0;
              top: 0;
          }
          .topnav.responsive a {
              float: none;
              display: block;
              text-align: center;
              margin: 0;
          }
      }
  </style>
  <header>
      <div id="myTopnav" class="topnav">
          <a href="./"><img class="logotype" src="./assets/logo-still-dark.gif" /></a>
          <a id="hh" href="/about">About</a>
          <a href="/frequently-asked-questions">FAQ</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
      </div>
  </header>

`;

class Header extends HTMLElement {
  constructor() {
      super();

  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(headerTemplate.content);
  }

}



customElements.define('header-component', Header);
