
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '
            < a href = "http://www.google.com" > click here for google</a >
                ''
    }
}

customElements.define('my-header', MyHeader)