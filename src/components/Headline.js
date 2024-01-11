import { Component } from '../core/chloeun'

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <span class="material-symbols-outlined checklist-icon">checklist</span>
      <h1>
        My Tasks
      </h1>
    `
  }}