import React, { useState, useEffect } from 'react'
import firebase from './firebase'
function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [selloading, setSelloading] = useState(false)
  const [selectedid, setSelectedid] = useState('')
  //select todo lists
  useEffect(() => {
    setLoading(true)
    const database = firebase
      .firestore()
      .collection('todoapp')
      .orderBy('date', 'desc')
    database.onSnapshot((query) => {
      const items = []
      query.forEach((element) => {
        items.push({ ...element.data(), ids: element.id })
      })
      setList(items)
      setLoading(false)
    })
  }, [])

  //save the todolists
  function formhundle(e) {
    if (!selloading) {
      const data = {
        todo: todo,
        date: new Date().getTime(),
      }
      firebase.firestore().collection('todoapp').add(data)
      setTodo('')
    }
  }

  //select specific todo list to update it
  function selecttodo(id) {
    setSelloading(true)
    const database = firebase.firestore().collection('todoapp').doc(id)
    database.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data()
        setTodo(data.todo)
        setSelectedid(id)
      } else {
        alert('This collection not found')
      }
    })
  }

  //update todo
  function update(id) {
    firebase.firestore().collection('todoapp').doc(id).update({ todo: todo })
    setSelloading(false)
    setTodo('')
  }

  //delete todo
  function Delete(id) {
    firebase.firestore().collection('todoapp').doc(id).delete()
  }

  return (
    <div className='container'>
      <div className='sub jumbotron'>
        <h1>Todo List</h1>
        <div className='form-inline  d-flex'>
          <input
            type='text'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className='form-control input-sm'
            for='submit'
          />
          {selloading ? (
            <button
              type='submit'
              className='btn btn-warning'
              value={selectedid}
              onClick={(e) => update(e.target.value)}
            >
              Edit
            </button>
          ) : (
            <button
              id='submit'
              type='submit'
              onClick={formhundle}
              className='btn btn-sm btn-primary'
            >
              Add Todo
            </button>
          )}
        </div>
        <table className='table table-dark'>
          <tbody>
            {loading
              ? <tr><td>Please wait....</td></tr>
              : list.map(function (item) {
                  return (
                    <tr key={item.ids}>
                      <td>{item.todo}</td>
                      <td>
                        <button
                          className='btn btn-warning'
                          onClick={(e) => selecttodo(e.target.value)}
                          value={item.ids}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={(id) => Delete(id.target.value)}
                          value={item.ids}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
