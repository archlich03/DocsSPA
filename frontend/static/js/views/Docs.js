import AbstractView  from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Reference Documentation");
    }

    async getHTML() {
        const response = await fetch(`/static/html/docs.html`);
        const html = await response.text();
        return `${html}`;
    }
}