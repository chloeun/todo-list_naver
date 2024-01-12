import { Component } from '../core/chloeun';
import todoStore, { readTodo, deleteTodo, deleteTodos, reorderTodo } from '../store/todo'
import TodoItem from './TodoItem';


const SECOND_TO_MS = 1000

export default class TodoList extends Component {
  constructor(props) {
		super({
      props,
    })
    readTodo()
    todoStore.subscribe('tasks', () => {
      this.render()
    })
    todoStore.subscribe('loading', () => {
      this.render()
    })
  }
  render(){

    const { task } = this.props;
    this.el.classList.add('todo-list')
    this.el.innerHTML = /* html */ `
      <div class='todo-list-top'>
        <a class = 'deleteAll'>
          <span> Delete All </span>
        </a>
        <div class='loaderwrap'><div class='the-loader hide'></div></div>
      </div>
      <div class ='todos sortable'></div>
      
    `
    console.log(todoStore.state.tasks)
    const tasksEl = this.el.querySelector ('.todos')
    tasksEl.append(
      ...todoStore.state.tasks.map(task => new TodoItem({
        task
      }).el)
    )
    const deleteAllEl = this.el.querySelector ('.deleteAll')

    //DELETE All//
    
    const btnDelAllItems = this.el.querySelector('.deleteAll')
    btnDelAllItems.addEventListener('click', ()=>{
      const allTasks = (todoStore.state.tasks)
      let taskIds = []
      allTasks.map(task => taskIds.push(task.id))
      console.log(taskIds)
      deleteTodos(taskIds)
    })

    // LOADER //

    const loaderEl = this.el.querySelector('.the-loader')
    todoStore.state.loading 
      ? loaderEl.classList.remove('hide') 
      : loaderEl.classList.add('hide') 
    
  }
  
}