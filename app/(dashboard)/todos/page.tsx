import TodoList from '@/app/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}
export default async function Todos() {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
