"use client"

import { fcTitle } from "@/app/utils/function"
import getBuy from "@/app/utils/getBuy"
import React from "react"

export default async function Title({ id }: any) {
  const buyData: Promise<any> = getBuy(id)
  const data = await buyData

  if (!data) return
  return <h1>{fcTitle(data[0])}</h1>
}
