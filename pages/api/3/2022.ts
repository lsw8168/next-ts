import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "12",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 67,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 18,
      DEAL_DD: 17,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "72,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 7,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "12",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 201,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 99.1742,
      APTFNO: 42,
      DEAL_DD: 15,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "70,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "12",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 7,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 3,
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "64,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 2,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "12",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 25,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.8848,
      APTFNO: 8,
      DEAL_DD: 10,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "60,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "12",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 108,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.3838,
      APTFNO: 28,
      DEAL_DD: 1,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "71,000",
      RDEALER_LAWDNM: "-",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 2,
      REQ_GBN: "직거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "10",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 54,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.8848,
      APTFNO: 15,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "70,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "09",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 95,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.3838,
      APTFNO: 20,
      DEAL_DD: 1,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "81,500",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "08",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 145,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.3838,
      APTFNO: 38,
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "75,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 7,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "07",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 51,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 14,
      DEAL_DD: 29,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "74,500",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 2,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "07",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 76,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 99.1742,
      APTFNO: 17,
      DEAL_DD: 27,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "93,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "07",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 84,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 18,
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "76,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "07",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 54,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.3838,
      APTFNO: 15,
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "76,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 7,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "04",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 35,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9816,
      APTFNO: 10,
      DEAL_DD: 30,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "65,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "04",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 72,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9816,
      APTFNO: 19,
      DEAL_DD: 26,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "63,500",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "04",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 67,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9816,
      APTFNO: 18,
      DEAL_DD: 20,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "65,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "04",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 39,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 9,
      DEAL_DD: 5,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "85,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "03",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 128,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.3838,
      APTFNO: 27,
      DEAL_DD: 20,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "89,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "785",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]대로3류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 43,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9816,
      APTFNO: 12,
      DEAL_DD: 17,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "65,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
  ]
  res.status(200).json(data)
}