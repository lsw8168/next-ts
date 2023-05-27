export const fcTitle = (title: any) => {
  return `${title.JIBUN_NAME} ${title.BLDG_NM}`
}

export const fcList = (jsonData: any[]) => {
  const groupValues = jsonData.reduce((acc: any, current) => {
    acc[current.BLDG_AREA] = acc[current.BLDG_AREA] || []
    acc[current.BLDG_AREA].push(current)
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
      return d.data.filter((e: any) => {
        return Number(e.DEAL_MM) === index + 1
      })
    })

    return (
      <tr key={i}>
        <td>
          {d.data[0].BLDG_AREA}
          <br />({Math.round(d.data[0].BLDG_AREA / 3.3)}평)
        </td>
        {arrayList.map((data, i) => {
          return (
            <td key={i} className="value">
              {data.map((d: any, i: any) => {
                return (
                  <div key={i}>
                    {d.DEAL_DD}일 {d.REQ_GBN.substr(0, 2)}
                    <br />
                    <span className="yellow">{d.SUM_AMT}</span> {d.APTFNO}층
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
