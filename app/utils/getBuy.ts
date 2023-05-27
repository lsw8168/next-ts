export default async function getBuy(id: string, year: string = "2023") {
  const res = await fetch(`/api/${id}/${year}`).then((d) => d)
  if (!res) return undefined
  return res.json()
}
