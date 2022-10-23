import { datosExp } from "./index.js";
console.log(datosExp);



class Card extends HTMLElement {
    constructor() {
        super();
        this.photo = "";
        this.name = "";
        this.description = "";
        this.linkGitHub = "";
    }

    static get observedAttributes() {
        return ["photo","name","description","linkGitHub"];
    }

    attributesChangedCallback(name, _,newvalue) {
        this[name] = newvalue;
    }

    connectedCallback() {
        // console.log(datosExp);
        // this.render();

    }

    render(){ return `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
}

}

customElements.define("my-card",Card);