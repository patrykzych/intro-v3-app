'use client'

import { useState } from 'react'

const NewTodoForm = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
  })

  return (
    <div>
      <form>
        <input type="text" placeholder="New Todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
