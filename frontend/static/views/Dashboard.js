import AbstrackView from "./AbstrackView.js";

export default class extends AbstrackView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Welcome back, Dom</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam quos culpa soluta dignissimos officiis, sed distinctio expedita ad dolorum et neque ipsam maxime eligendi officia. Nisi ab non illum.</p>
        <p><a href="/posts" data-link>View recent posts</a></p>
    `;
  }
}
