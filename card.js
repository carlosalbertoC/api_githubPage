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
        // this.innerHTML = `
        // <div class="row row-cols-1 row-cols-md-3 g-4">
        // ${this.render()}
        // </div>`
        // this.render();

    }

    render(){ return `
    <div class="card m-4" style="width: 18rem;">
    <img src=${this.photo} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">${this.description}</p>
      <a href=${this.linkGitHub} class="btn btn-primary">Go Github</a>
    </div>
  </div>
    ` 
}

}

customElements.define("my-card",Card);