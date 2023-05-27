import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "12",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 76,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 84.475,
      APTFNO: 20,
      DEAL_DD: 30,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "76,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "10",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 14,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 101.9047,
      APTFNO: 4,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "120,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 2,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "09",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 24,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 119.2427,
      APTFNO: 13,
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "156,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "08",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 78,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "-",
      BLDG_AREA: 59.9975,
      APTFNO: 21,
      DEAL_DD: 22,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "70,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "-",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "-",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "08",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 5,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 59.9975,
      APTFNO: 3,
      DEAL_DD: 16,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "67,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "07",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 4,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 59.9975,
      APTFNO: 2,
      DEAL_DD: 18,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "62,100",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "03",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 78,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 101.9047,
      APTFNO: 20,
      DEAL_DD: 16,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "136,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "01",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 63,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 84.475,
      APTFNO: 17,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "103,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "69",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]대로3류,[접합]중로1류,[접합]중로2류,[접합]어린이공원,[접합]완충녹지",
      DEAL_MM: "01",
      BLDG_NM: "용지더샵레이크파크",
      BUBN: null,
      HO_CODE: 74,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360277,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "행정관할구역변경",
      GRND_FLR_CNT: "-",
      VL_RAT: "211~215%",
      BLDG_AREA: 84.475,
      APTFNO: 19,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>,[저촉]상대정화구역<학교보건법>(반송중 반송여자중학교),[저촉]상대정화구역<학교보건법>(용호유치원),[저촉]상대정화구역<학교보건법>(용호초등학교),[저촉]상대정화구역<학교보건법>(창원중앙고등학교),[저촉]절대정화구역<학교보건법>,[저촉]절대정화구역<학교보건법>(용호초등학교),[저촉]절대정화구역<학교보건법>(창원중앙고등학교),[접합]자연재해위험지구<자연재해대책법>",
      SUM_AMT: "100,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "용호동",
      BUILD_YEAR: 2017,
      JIBUN_NAME: "경상남도 창원성산구  용호동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
  ]
  res.status(200).json(data)
}
