import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
    }

    async getHTML() {
        let response = await fetch(`/static/html/docs/${this.postId}.html`);
        let html = await response.text();
        if (html.includes("index")) {
            // Throw 404
            response = await fetch(`/static/html/Error_404.html`);
            this.setTitle("Error 404!");
            html = await response.text();
            return `${html}`;
        } else {
            // Throw normal
            fetch('/static/html/docs/blogs.json')
                .then(response => response.json())
                .then(data => {
                    const blogEntry = data.data.find(entry => entry.id == this.postId);
                    this.setTitle(blogEntry.title + " | Docs");
                })
                .catch(error => console.error(error));
            return `${html}`;
        }
    }
}