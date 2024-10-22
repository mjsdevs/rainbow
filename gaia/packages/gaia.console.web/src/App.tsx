import { useCallback, useEffect, useState } from 'react'
import './App.css'

import type { AppRouter } from '../../gaia.console.bff/src/router';
import { createTRPCClient, httpBatchLink } from '@trpc/client';


function App() {
  const [users, setUsers] = useState<{ id: string, name: string, age: number }[]>()

  const trpc = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });

  const fetchUsers = useCallback(async () => {
    const response = await trpc.list.query()

    setUsers(response);

  }, [trpc.list])

  useEffect(() => {fetchUsers()})

  return (
    <>
      {
        !users
          ? <p> loading... </p>
          : users?.map(user => <ul>

        <li> Name: {user.name} </li>
        <li> Age: {user.age} </li>
        <li> ID: {user.id} </li>

        </ul>)}

    </>
  )
}

export default App
