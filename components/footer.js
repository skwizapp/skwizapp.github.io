const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        h1, h2, h3, h4, p, a, b, span, li {
            font-family: 'Rubik';
            font-style: normal;
            -webkit-font-smoothing: antialiased;
        }
        .icon {
            width: 24px;
            height: 24px;
        }
        .icon-link {
            padding: 0 8px;
        }
        footer {
            background-color: #2B2B2B;
            text-align: center;
            margin: 0;
            padding-top: 80px;
            padding-bottom: 160px;
            width: 100%;
        }
        footer a {
            color: white;
            text-decoration: none;
            font-size: 16px;
        }
        footer a:hover {
            color: #F25CBE;
            transition-duration: .3s;
            transition-property: color;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
        }
        footer img#logomark {
            width: 80px;
            height: 80px;
            display: block;
            margin-bottom: 24px;
        }
        footer img#logotype {
            width: 144px;
            height: 72px;
            display: block;
            margin-bottom: 16px;
        }
        footer .container {
            margin: 0 auto;
            width: 100%;
            max-width: 1080px;
            text-align: left;
        }
        footer .lists {
            color: white;
            font-size: 16px;
        }
        footer .list {
            display: inline-block;
            float: right;
            width: 120px;
            margin-bottom: 56px;
        }
        footer .list:nth-child(1) {
            padding: 0 0 0 160px;
        }
        footer span {
            line-height: 32px;
            margin-bottom: 16px;
            display: block;
            font-weight: 700;
        }
        footer .list ul {
            list-style: none;
            font-weight: 400;
            margin: 0;
            padding: 0;
            line-height: 32px;
        }
        footer .grid {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 0;
            padding: 0 24px;
        }
        footer #subheader {
            border-top: 4px dashed #565656;
            padding-top: 56px;
            margin-top: 56px;
        }
        footer #privacy-links {
            text-align: right;
        }
        footer #social-links a {
            display: inline-block;
            margin-right: 40px;
            height: 24px;
        }
        footer #privacy-links a {
            margin-left: 40px;
            padding: 0 8px;
            line-height: 24px;
            display: inline-block;
        }
        footer span.copyright {
            color: white;
            font-weight: 300;
            display: inline-block;
            margin-left: 40px;
            padding: 0 8px;
            line-height: 24px;
            margin-bottom: 0;
        }

        @media only screen and (max-width: 800px) {
            footer .grid {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
            }
            footer .lists {
                margin-top: 56px;
                color: white;
                font-size: 16px;
            }
            footer .list:nth-child(1) {
                padding: 0;
            }
            footer .list {
                display: block;
                float: none;
            }
            footer #social-links a {
                display: block;
                margin-right: 0;
                height: 24px;
                margin-bottom: 24px;
            }
            footer #privacy-links {
                text-align: left;
            }
            footer #privacy-links a {
                margin-left: 0;
                display: block;
                margin-bottom: 24px;
            }

        }
  </style>
  <footer>
      <div class="container">
          <div class="grid">
              <div>
                  <img id="logotype" src="./assets/logo-still-light.gif" />
              </div>
              <div class="lists">
                  <div class="list">
                      <span>Get in touch</span>
                      <ul>
                          <li><a href="/contact">Contact</a></li>
                          <li><a href="/press">Press</a></li>
                      </ul>
                  </div>
                  <div class="list">
                      <span>More Skwiz</span>
                      <ul>
                          <li><a href="/about">About</a></li>
                          <li><a href="/frequently-asked-questions">FAQ</a></li>
                          <li><a href="/shop">Shop</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      <div id="subheader" class="container">
          <div class="grid">
              <div id="social-links">
                  <a class="icon-link" href="https://www.instagram.com/skwizcorpse/" target="_blank"><img class="icon" src="./assets/instagram-light.gif" /></a>
                  <a class="icon-link" href="https://www.tiktok.com/@skwizcorpse" target="_blank"><img class="icon" src="./assets/tiktok-light.gif" /></a>
              </div>
              <div id="privacy-links">
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms</a>
                  <span class="copyright">© <script>document.write(new Date().getFullYear())</script> jERKS iNC</span>
              </div>
          </div>
      </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
