export class Card extends HTMLElement {
    constructor(_photo,_name,_description,_linkGitHub) {
        super();
        this.photo = _photo;
        this.name = _name;
        this.description = _description;
        this.linkGitHub = _linkGitHub;
    }

    static get observedAttributes() {
        return ["photo","name","description","linkGitHub"];
    }

    attributesChangedCallback(name, _,newvalue) {
        this[name] = newvalue;
    }

    connectedCallback() {
        // console.log(datosExp);
        this.render();

    }

    render(){ return `
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${this.photo}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}</p>
            <a href="${this.linkGitHub}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
    </div>`
}

}

customElements.define("my-card",Card);