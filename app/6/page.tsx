"use client"

import React, { useEffect, useState } from "react"
import { d22_1, d22_2, d22_3, d22_4, d23_1, d23_2 } from "./data"

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fc = (jsonData: any[]) => {
    const groupValues = jsonData.reduce((acc: any, current) => {
      const value = [
        ...current.month1List,
        ...current.month2List,
        ...current.month3List,
      ]
      acc[current.BLDG_AREA] = acc[current.BLDG_AREA] || []
      acc[current.BLDG_AREA].push(...value)
      return acc
    }, {})

    const groups = Object.keys(groupValues)
      .map((key) => {
        return { group: key, data: groupValues[key] }
      })
      .sort((a, b) => {
        return Number(a.group) - Number(b.group)
      })

    const data = groups.map((d, i) => {
      const arrayList = [...Array(12).keys()].map((_, index) => {
        return d.data.filter((e) => {
          return Number(e.DEAL_MM) === index + 1
        })
      })

      return (
        <tr key={i}>
          <td>{d.data[0].BLDG_NM}</td>
          <td>
            {d.data[0].BLDG_AREA}({Math.round(d.data[0].BLDG_AREA / 3.3)}평)
          </td>
          {arrayList.map((data, i) => {
            return (
              <td key={i}>
                {data.map((d, i) => {
                  return (
                    <div key={i}>
                      {d.DEAL_DD}일{" "}
                      <span style={{ color: "#b55000" }}>{d.SUM_AMT}</span>(
                      {d.APTFNO}층) {d.REQ_GBN}
                    </div>
                  )
                })}
              </td>
            )
          })}
        </tr>
      )
    })

    return data
  }

  return (
    <main className="flex flex-col justify-between p-12">
      <h1>창원시 성산구 가음동 창원센텀푸르지오</h1>
      <h2>2022</h2>
      <table>
        <thead>
          <tr>
            <th>단지</th>
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
        <tbody>{mounted && fc([...d22_1, ...d22_2, ...d22_3, ...d22_4])}</tbody>
      </table>
      <br />
      <h2>2023</h2>
      <table>
        <thead>
          <tr>
            <th>단지</th>
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
        <tbody>{mounted && fc([...d23_1, ...d23_2])}</tbody>
      </table>
    </main>
  )
}
