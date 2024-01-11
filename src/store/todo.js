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
  console.log (title)
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
  console.log(json)
  return json
}


//DELETE//

export const deleteTodo = async (todoId) => {
  console.log ('deleteTodo')
  console.log (todoId)
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



