import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "63",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[접합]대로3류,[접합]중로1류,[접합]소로1류",
      DEAL_MM: "12",
      BLDG_NM: "롯데1단지",
      BUBN: null,
      HO_CODE: 23,
      ROAD_LEN: "25m이상",
      BLDG_CD: 16729,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "116~120%",
      BLDG_AREA: 82.53,
      APTFNO: 3,
      DEAL_DD: 22,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]기타<도시및주거환경정비법>(용호1 주택재건축정비예정구역)",
      SUM_AMT: "60,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "21~25%",
      DNAME: "용호동",
      BUILD_YEAR: 1984,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트",
    },
    {
      BOBN: "63",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[접합]대로3류,[접합]중로1류,[접합]소로1류",
      DEAL_MM: "12",
      BLDG_NM: "롯데1단지",
      BUBN: null,
      HO_CODE: 12,
      ROAD_LEN: "25m이상",
      BLDG_CD: 16729,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "4",
      VL_RAT: "116~120%",
      BLDG_AREA: 67.46,
      APTFNO: 2,
      DEAL_DD: 1,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]기타<도시및주거환경정비법>(용호1 주택재건축정비예정구역)",
      SUM_AMT: "56,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "21~25%",
      DNAME: "용호동",
      BUILD_YEAR: 1984,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 10,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트조",
    },
    {
      BOBN: "63",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[접합]대로3류,[접합]중로1류,[접합]소로1류",
      DEAL_MM: "08",
      BLDG_NM: "롯데1단지",
      BUBN: null,
      HO_CODE: 10,
      ROAD_LEN: "25m이상",
      BLDG_CD: 16729,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "116~120%",
      BLDG_AREA: 67.46,
      APTFNO: 2,
      DEAL_DD: 11,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]기타<도시및주거환경정비법>(용호1 주택재건축정비예정구역)",
      SUM_AMT: "63,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "21~25%",
      DNAME: "용호동",
      BUILD_YEAR: 1984,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 13,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트",
    },
    {
      BOBN: "63",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[접합]대로3류,[접합]중로1류,[접합]소로1류",
      DEAL_MM: "05",
      BLDG_NM: "롯데1단지",
      BUBN: null,
      HO_CODE: 13,
      ROAD_LEN: "25m이상",
      BLDG_CD: 16729,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "4",
      VL_RAT: "116~120%",
      BLDG_AREA: 67.46,
      APTFNO: 2,
      DEAL_DD: 27,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]기타<도시및주거환경정비법>(용호1 주택재건축정비예정구역)",
      SUM_AMT: "69,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "21~25%",
      DNAME: "용호동",
      BUILD_YEAR: 1984,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 10,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트조",
    },
  ]
  res.status(200).json(data)
}
