import { Component } from '../core/chloeun'
import Headline from '../components/Headline'
import CreateTodo from '../components/CreateTodo'
import TodoListTabs from '../components/TodoListTabs'
import TodoList from '../components/TodoList'

export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const createtodo = new CreateTodo().el
    const todolisttabs = new TodoListTabs().el
    const todolist = new TodoList().el
    
    this.el.classList.add('container')
    this.el.append(
      headline,
      createtodo,
      todolisttabs,
      todolist
    )
  }
}