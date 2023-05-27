"use client"

import Table from "@/app/utils/table"
import Title from "@/app/utils/title"
import Link from "next/link"
import React from "react"

export default function Page({ params: { id } }: any) {
  return (
    <main className="flex flex-col justify-between p-12">
      <Link href={`/`}>리스트</Link>
      {/* @ts-expect-error Async Server Component */}
      <Title id={id} />
      {/* @ts-expect-error Async Server Component */}
      <Table id={id} year="2023" />
      {/* @ts-expect-error Async Server Component */}
      <Table id={id} year="2022" />
    </main>
  )
}
