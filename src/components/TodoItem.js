import { Component } from '../core/chloeun';
import todoStore, { readTodo, updateTodo, deleteTodo, updateCheckbox} from '../store/todo'
import { getFormatDate } from "../util/date";

export default class TodoItem extends Component {
  constructor(props) {
		super({
      props,
    })
	}
  
  render() {
    const { task } = this.props
    console.log(task.done)
    this.el.classList.add('todoItem')
    this.el.innerHTML = /* html */ `
      <div class='eachItem'>
        
        <input type='checkbox' ${task.done? 'checked' : ''}/>
        <a class='btnOpenModal _eachItem'> ${task.title}</a>
        <button class='deleteitem'>
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div class='modal' style="display:none">
        <div class ='modalBody'>
          <div class='created-at'>
            <span class="material-symbols-outlined">add_task</span>
            <p> created at: ${getFormatDate(task.createdAt)} </p>
          </div>
          <div class='updated-at'>
            <span class="material-symbols-outlined">Edit</span>
            <p> updated at: ${getFormatDate(task.updatedAt)} </p>
          </div>
          <input class='title' value='${task.title}' />
          <div class = 'buttons'>
            <button class='btnEditModal'>Edit</button>
            <button button class='btnCloseModal'>Close</button>
          </div>
        </div>
      </div>
      
    `
    //DELETE//

    const btnDelItem = this.el.querySelector('.deleteitem')
    btnDelItem.addEventListener('click', ()=>{
      deleteTodo(task.id)
    })

    
    //MODAL//

    const modal = this.el.querySelector('.modal')
    const btnOpenModal = this.el.querySelector('.btnOpenModal')
    const btnCloseModal = this.el.querySelector('.btnCloseModal')
    const btnEditModal = this.el.querySelector('.btnEditModal')

    btnOpenModal.addEventListener('click', ()=>{
      modal.style.display = 'flex';
    })

    btnCloseModal.addEventListener('click', ()=>{
      modal.style.display = 'none';
    })

    //PUT - MODAL INPUT REVISE//

    const inputModal = this.el.querySelector('.modalBody input')
    
    inputModal.addEventListener('click', event => {
      inputModal.value = null;
    })
    const checkbox = this.el.querySelector ('.eachItem input')
    btnEditModal.addEventListener('click', event => {
      const title = inputModal.value
      const done = checkbox.checked? true : false 
      console.log(done)
      updateTodo(task, title, done).then(() => readTodo()) 
      console.log(task)
    })

    btnCloseModal.addEventListener('click', event => {
      const title = task.title
      inputModal.value = title
    });

    // CHECK BOX //
    const eachItem = this.el.querySelector ('._eachItem')
    const eachItemBox = this.el.querySelector ('._eachItem')
    
    
    checkbox.type = 'checkbox'
    checkbox.addEventListener('click', (event) =>{ 
      if (checkbox.checked)
      {
        updateCheckbox(task, true)
        eachItem.style.color= 'rgb(170, 168, 168)'
      }
      else {
        eachItem.style.textDecoration='none'
        eachItem.style.color = '';
        updateCheckbox(task, false)
      }
    }) 
  }
} 