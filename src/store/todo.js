import { Store } from '../core/chloeun';


const store = new Store({
  tasks: [],
  // status: "all",
  loading: false,
  // deleteAllLoading: false,
});


export default store;

// READ TODO //

export const readTodo = async () => {
  store.state.loading = true
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
  store.state.loading = false
}

// CREATE TODO //

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


// EDIT TODO //

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
  readTodo()
  return res
}

// CHECKBOX //

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

// CHANGE ORDER //

export const reorderTodo = async (todoIds) => {
  console.log('change order')
		const res = await fetch(
			`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder`,
			{
				method: 'PUT',
				headers: {
          'content-type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo',
          'username': 'KDT7_KimJeongEun'
				},
				body: JSON.stringify({
					todoIds: todoIds
				})
			})
      const item = await res.json()
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

//DELETE ALL//

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


