import { Component } from '../core/chloeun'
import Headline from '../components/Headline'
import CreateTodo from '../components/CreateTodo'


export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const createtodo = new CreateTodo().el
    
    this.el.classList.add('container')
    this.el.append(
      headline,
      createtodo,
    )
  }
}