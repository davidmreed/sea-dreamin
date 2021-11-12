import { LightningElement } from "lwc";

export default class BaseComponent extends LightningElement {
  constructor() {
    super();
    console.log("Hello from JavaScript!");
  }
}
