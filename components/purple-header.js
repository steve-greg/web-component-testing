class PurpleHeader extends HTMLElement { 

    connectedCallback() {
        this.style.color = "purple";
        // innerHTML doesnt have any data rendered so we can defer rendering until after the data is available
        // With a zero setTimeout
        setTimeout(() => {
            this.innerHTML = `<h1>${this.innerHTML}</h1>`;
        });
    }
  }
  
  customElements.define("purple-header", PurpleHeader);