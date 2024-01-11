import { Component } from './core/chloeun'
import TheHeader from './components/TheHeader'

export default class App extends Component {
  render() {
    const header = new TheHeader().el;
    const routerView = document.createElement('router-view')
    this.el.append(
      header,
      routerView
    )
  }
}