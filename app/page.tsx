"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-12">
      <ul>
        <li>
          <Link href="/1">창원 성산구 대원동 포레나대원</Link>
        </li>
        <li>
          <Link href="/2">창원시 의창구 중동 창원중동유니시티1단지</Link>
        </li>
        <li>
          <Link href="/6">창원시 성산구 가음동 창원센텀푸르지오</Link>
        </li>
        <li>
          <Link href="/7">창원시 성산구 용호동 용지아이파크</Link>
        </li>
        <li>
          <Link href="/8">창원시 성산구 용호동 용지더샵레이크파크</Link>
        </li>
        <li>
          <Link href="/9">창원시 성산구 가음동 한화꿈에그린</Link>
        </li>
      </ul>
    </main>
  )
}
