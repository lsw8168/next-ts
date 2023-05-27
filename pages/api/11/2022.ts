import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "527",
      LAND_USE_NM:
        "[포함]제1종지구단위계획구역,[저촉]제3종일반주거지역,[접합]제2종일반주거지역,[접합]도로,[접합]어린이공원",
      DEAL_MM: "10",
      BLDG_NM: "이수브라운스톤상도(527-0)",
      BUBN: null,
      HO_CODE: 23,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20086584,
      LAND_MOVE1: "200*",
      LAND_MOVE2: "구획정리완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "226~230%",
      BLDG_AREA: 59.91,
      APTFNO: 14,
      DEAL_DD: 8,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]대공방어협조구역<군사기지 및 군사시설보호법>(위탁고도:77-257m),[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>,[포함]과밀억제권역<수도권정비계획법>,[저촉]상대정화구역<학교보건법>,[접합]준보전산지<산지관리법>,[접합]기타<건축법>(가로구역별 건축물 최고높이 지정구역),[접합]가로구역별최고높이제한지역<건축법>",
      SUM_AMT: "108,500",
      RDEALER_LAWDNM: "경기 수원권선구, 서울 강남구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "상도동",
      BUILD_YEAR: 2007,
      JIBUN_NAME: "서울특별시 동작구  상도동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "527",
      LAND_USE_NM:
        "[포함]제1종지구단위계획구역,[저촉]제3종일반주거지역,[접합]제2종일반주거지역,[접합]도로,[접합]어린이공원",
      DEAL_MM: "06",
      BLDG_NM: "이수브라운스톤상도(527-0)",
      BUBN: null,
      HO_CODE: 9,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20086584,
      LAND_MOVE1: "200*",
      LAND_MOVE2: "구획정리완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "226~230%",
      BLDG_AREA: 84.99,
      APTFNO: 11,
      DEAL_DD: 15,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]대공방어협조구역<군사기지 및 군사시설보호법>(위탁고도:77-257m),[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>,[포함]과밀억제권역<수도권정비계획법>,[저촉]상대정화구역<학교보건법>,[접합]준보전산지<산지관리법>,[접합]기타<건축법>(가로구역별 건축물 최고높이 지정구역),[접합]가로구역별최고높이제한지역<건축법>",
      SUM_AMT: "134,000",
      RDEALER_LAWDNM: "서울 동작구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "상도동",
      BUILD_YEAR: 2007,
      JIBUN_NAME: "서울특별시 동작구  상도동",
      DONG_CODE: 2,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
  ]
  res.status(200).json(data)
}
