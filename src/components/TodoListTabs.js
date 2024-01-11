import { Component } from '../core/chloeun';
import todoStore, { readTodo, deleteTodo, deleteTodos } from '../store/todo'
import TodoItem from './TodoItem';
import TodoList from './TodoList'

export default class TodoListTabs extends Component {
  constructor(props) {
		super({
      props,
    })
  }
  
  render(){
    const { task } = this.props;
    this.el.classList.add('todo-list-tabs')
    this.el.innerHTML = /* html */ `
    <div class="category">
      <div class="category-item all" status="all">All</div>
      <div class="category-item todo" status="todo">Todo</div>
      <div class="category-item done" status="done">Done</div>
    </div>
    `;

    let currentTab = 'all'; // 초기 탭 상태 설정
    let filteredTasks = [...todoStore.state.tasks]; // 현재 필터링된 결과를 저장하는 변수 추가
    
    const renderTasks = () => {
      const todoListContainer = document.querySelector('.todos');
      todoListContainer.innerHTML = ''; // Clear the previous content before rendering

      filteredTasks.forEach(task => {
        const todoItem = new TodoItem({ task });
        todoListContainer.appendChild(todoItem.el);
      });

      console.log(filteredTasks); 
    };

  const handleTabClick = (status) => {
    if (currentTab === status) return; // 이미 선택된 탭인 경우 무시
    const previousActiveTab = this.el.querySelector(`.category-item.${currentTab}`);
    previousActiveTab.classList.remove('active-tab');
    
    currentTab = status; // 현재 탭 업데이트

    const currentActiveTab = this.el.querySelector(`.category-item.${currentTab}`);
    currentActiveTab.classList.add('active-tab');
  
    switch (status) {
      case 'todo':
        filteredTasks = todoStore.state.tasks.filter(task => !task.done);
        break;
      case 'done':
        filteredTasks = todoStore.state.tasks.filter(task => task.done);
        break;
      default:
        filteredTasks = [...todoStore.state.tasks]; // 기본적으로 초기 데이터로 복원
        break;
    }

    renderTasks(); 
  };

  const tabs = ['all', 'todo', 'done'];
  tabs.forEach(tab => {
    const tabElement = this.el.querySelector(`.${tab}`);
    tabElement.addEventListener('click', () => handleTabClick(tab));
  });
  const initialTasks = [...todoStore.state.tasks];

  }
}


