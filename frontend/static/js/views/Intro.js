import AbstractView  from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Main");
    }

    async getHTML() {
        const response = await fetch(`/static/html/intro.html`);
        const html = await response.text();
        return `${html}`;
    }
}