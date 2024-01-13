import AbstractView  from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Error 404!");
    }

    async getHTML() {
        const response = await fetch(`/static/html/Error_404.html`);
        const html = await response.text();
        return `${html}`;
    }
}