import { Component } from '../core/chloeun'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name:'Home',
            href: '#/'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
  }
  render() {
    this.el.innerHTML = /* html */`
      <a heref="#/" class="logo">
        <!-- <img src="/naver-icon-file.png" alt="Logo">   -->
        <span>NAVER</span>
        todolist
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            return /*html*/ `
              <li>
                <a href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>      
      </nav>
    `
  }
}