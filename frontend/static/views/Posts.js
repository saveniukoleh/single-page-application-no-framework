import AbstrackView from "./AbstrackView.js";

export default class extends AbstrackView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
        <h1>Posts</h1>
        <p>You are viewing the posts!</p>
    `;
  }
}
