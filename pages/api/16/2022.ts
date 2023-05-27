import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "62",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[접합]자연녹지지역,[접합]중로2류,[접합]소로1류",
      DEAL_MM: "12",
      BLDG_NM: "롯데2단지",
      BUBN: null,
      HO_CODE: 17,
      ROAD_LEN: "25m미만",
      BLDG_CD: 16730,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "116~120%",
      BLDG_AREA: 55.65,
      APTFNO: 3,
      DEAL_DD: 6,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]기타<도시및주거환경정비법>(용호1 주택재건축정비예정구역),[저촉]상대정화구역<학교보건법>(용남초등학교)",
      SUM_AMT: "42,500",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "21~25%",
      DNAME: "용호동",
      BUILD_YEAR: 1987,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트",
    },
    {
      BOBN: "62",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[접합]자연녹지지역,[접합]중로2류,[접합]소로1류",
      DEAL_MM: "04",
      BLDG_NM: "롯데2단지",
      BUBN: null,
      HO_CODE: 29,
      ROAD_LEN: "25m미만",
      BLDG_CD: 16730,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "116~120%",
      BLDG_AREA: 112.98,
      APTFNO: 5,
      DEAL_DD: 22,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]기타<도시및주거환경정비법>(용호1 주택재건축정비예정구역),[저촉]상대정화구역<학교보건법>(용남초등학교)",
      SUM_AMT: "100,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "21~25%",
      DNAME: "용호동",
      BUILD_YEAR: 1987,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 7,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트",
    },
    {
      BOBN: "62",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[접합]자연녹지지역,[접합]중로2류,[접합]소로1류",
      DEAL_MM: "03",
      BLDG_NM: "롯데2단지",
      BUBN: null,
      HO_CODE: 3,
      ROAD_LEN: "25m미만",
      BLDG_CD: 16730,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "116~120%",
      BLDG_AREA: 186.81,
      APTFNO: 1,
      DEAL_DD: 14,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]기타<도시및주거환경정비법>(용호1 주택재건축정비예정구역),[저촉]상대정화구역<학교보건법>(용남초등학교)",
      SUM_AMT: "157,500",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "21~25%",
      DNAME: "용호동",
      BUILD_YEAR: 1987,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트",
    },
  ]
  res.status(200).json(data)
}
