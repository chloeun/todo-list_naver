import { Component } from '../core/chloeun';
import todoStore, { readTodo, deleteTodo, deleteTodos, reorderTodo } from '../store/todo'
import TodoItem from './TodoItem';
import Sortable from 'sortablejs';


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

    // CHANGE ORDER //

    // const reorderTodoEl = this.el.querySelector('.todos') 
    // let sortables = Sortable.create(reorderTodoEl)

    // $(function () {
    //   $('.sortable').sortable();
    //   $('.sortable').disableSelection();
    // });
    
    // tasksEl.addEventListener('mouseup', async () => {
    //   setTimeout( async() => {
    //     const allTasks = todoStore.state.tasks;
    //     let taskIds = allTasks.map(task => task.id);
        
    //     // Use the correct method to get the updated order
    //     const updatedOrder = $('.sortable').sortable('toArray');
    //     await reorderTodo(updatedOrder);
    //     console.log(allTasks);
        
    //   }, SECOND_TO_MS,
      
    //   );
    // } 
    // );
    

    // $(function () {
    //   $('.sortable').sortable({
    //     stop: async function (event, ui) {
    //       // Get the updated order after sorting
    //       const updatedOrder = $('.sortable').sortable('toArray');
    
    //       // Call your reorderTodo function to update the backend
    //       await reorderTodo(updatedOrder);
    //     }
    //   });
    
    //   // Disable text selection while dragging
    //   $('.sortable').disableSelection();
    // });
    
    // tasksEl.addEventListener('mouseup', () => {
    //   setTimeout(async () => {
    //     const allTasks = todoStore.state.tasks;
    //     let taskIds = allTasks.map(task => task.id);
    
    //     // Call your reorderTodo function to update the backend
    //     await reorderTodo(taskIds);
    
    //     console.log(allTasks);
    //   }, SECOND_TO_MS);
    // });
    
    
  }
  
}