import { Store } from '../core/chloeun';


const store = new Store({
  tasks: [],
  // status: "all",
  // loading: false,
  // deleteAllLoading: false,
});


export default store;

//GET//

export const readTodo = async () => {
  // console.log ('readTodo')
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', 
    {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo',
      'username': 'KDT7_KimJeongEun'
    }
  });
  const tasks = await res.json()
  store.state.tasks = [... tasks]
  // window.onload = readTodo()
}

//POST//

export const createTodo = async (title) => {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', 
    {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo',
      'username': 'KDT7_KimJeongEun'
    },
    body: JSON.stringify({
      title: title,
      order:  ''
    })
  });
  const json = await res.json()
  readTodo()
  return json
}


//PUT//

export const updateTodo = async (task, editedTitle, editedDone) => {
  console.log ('updateTodo')
  console.log(task)

  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${task.id}`, 
    {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo',
      'username': 'KDT7_KimJeongEun'
    },
    body: JSON.stringify({
      title: editedTitle,
      done: editedDone
      // order:  // 적절한 순서 값 사용
    })
  });
  const json = await res.json()
  return res
}

export const updateCheckbox = async (task, editedDone) => {

  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${task.id}`, 
    {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo',
      'username': 'KDT7_KimJeongEun'
    },
    body: JSON.stringify({
      title: task.title,
      done: editedDone
      // order:  // 적절한 순서 값 사용
    })
  });
  const json = await res.json()
  readTodo()
  return res
}

//DELETE//

export const deleteTodo = async (todoId) => {

  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`, 
    {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo',
      'username': 'KDT7_KimJeongEun'
    },
  });
  const json = await res.json()
  console.log(json)
  readTodo()
  return json
  
}

//DELETIONS//

export const deleteTodos = async (todoIds) => {
  console.log ('deleteTodos')
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions', 
    {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo',
      'username': 'KDT7_KimJeongEun'
    },
    body: JSON.stringify({
      todoIds: todoIds
    })
  });
  const json = await res.json()
  readTodo()
  return json
}


