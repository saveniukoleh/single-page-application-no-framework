import AbstrackView from "./AbstrackView.js";

export default class extends AbstrackView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
        <h1>Settings</h1>
        <p>Manage your privacy and configuration.</p>
    `;
  }
}
