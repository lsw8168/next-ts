"use client"

import { fcList, fcTitle } from "@/app/utils/function"
import getBuy from "@/app/utils/getBuy"
import React from "react"

export default async function Table({ id, year }: any) {
  const buyData: Promise<any> = getBuy(id, year)
  const data = await buyData

  if (!data) return
  return (
    <>
      <h2>{year}</h2>
      <table>
        <thead>
          <tr>
            <th>전용 면적</th>
            <th>1월</th>
            <th>2월</th>
            <th>3월</th>
            <th>4월</th>
            <th>5월</th>
            <th>6월</th>
            <th>7월</th>
            <th>8월</th>
            <th>9월</th>
            <th>10월</th>
            <th>11월</th>
            <th>12월</th>
          </tr>
        </thead>
        <tbody>{fcList(data)}</tbody>
      </table>
    </>
  )
}
