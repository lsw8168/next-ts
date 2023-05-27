"use client"

import Link from "next/link"
import getAllUsers from "./utils/getAllUsers"

export default function Home() {
  const usersData = getAllUsers()
  const users = usersData
  return (
    <main className="flex flex-col justify-between p-12">
      <h1>아파트 실거래가</h1>
      <br />
      {users.map((user) => {
        return (
          <p key={user.id}>
            <Link href={`/buy/${user.id}`}>
              {user.id}. {user.name}
            </Link>
          </p>
        )
      })}
    </main>
  )
}
