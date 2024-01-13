import AbstractView  from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
    }

    async getHTML() {
        const response = await fetch(`/static/html/docs/${this.postId}.html`);
        const html = await response.text();
        return `${html}`;
    }
}