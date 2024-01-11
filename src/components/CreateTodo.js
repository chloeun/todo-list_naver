import { Component } from '../core/chloeun';
import todoStore, { createTodo } from '../store/todo'

export default class CreateTodo extends Component {
  render() {
    this.el.classList.add('createtodo');
    this.el.innerHTML = /* html */ `
      <button class="btn btn-primary">
        <span class="material-symbols-outlined">add</span>
        <span>Add Task</span>
      </button>
      <input placeholder="새로운 할 일을 작성하세요." />
    `;

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      // 
    });
    inputEl.addEventListener('keydown', event => {
      const task = inputEl.value.trim();
      if (event.isComposing) return
      if (event.key ==='Enter' && inputEl.value.trim()) {
        console.log(createTodo)
        createTodo(task) 
        inputEl.value = ''
      }
    });
    
    const btnEl = this.el.querySelector('button');
    btnEl.addEventListener('click', () => {
      const task = inputEl.value.trim();
      if (task !== '') {
        console.log(createTodo)
        createTodo(task) 
        console.log('Entered Task:', task);
        inputEl.value = ''; // 입력 필드 비우기
      }
    });

    
  }
}