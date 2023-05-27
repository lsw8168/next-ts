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
      DEAL_MM: "04",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 105,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.8848,
      APTFNO: 28,
      DEAL_DD: 20,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "67,800",
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
      DEAL_MM: "03",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 66,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 99.1742,
      APTFNO: 18,
      DEAL_DD: 18,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "92,000",
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
      DEAL_MM: "03",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 71,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9816,
      APTFNO: 19,
      DEAL_DD: 11,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "56,800",
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
      DEAL_MM: "03",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 83,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 22,
      DEAL_DD: 11,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "80,500",
      RDEALER_LAWDNM: "경남 창원마산회원구, 경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 1,
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
      HO_CODE: 115,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9816,
      APTFNO: 30,
      DEAL_DD: 8,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "55,500",
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
      DEAL_MM: "03",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 37,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.8848,
      APTFNO: 11,
      DEAL_DD: 4,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "66,500",
      RDEALER_LAWDNM: "경남 창원의창구",
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
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 23,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 7,
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "76,800",
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
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 28,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.3838,
      APTFNO: 9,
      DEAL_DD: 10,
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
      DONG_CODE: 5,
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
      HO_CODE: 81,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.8848,
      APTFNO: 22,
      DEAL_DD: 6,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "67,800",
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
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 192,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 99.1742,
      APTFNO: 40,
      DEAL_DD: 6,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "88,000",
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
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 112,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9816,
      APTFNO: 29,
      DEAL_DD: 3,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "54,500",
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
      DEAL_MM: "01",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 4,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.3838,
      APTFNO: 2,
      DEAL_DD: 20,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "69,000",
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
      DEAL_MM: "01",
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
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "68,500",
      RDEALER_LAWDNM: "경남 창원성산구, 경남 창원의창구",
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
      DEAL_MM: "01",
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
      APTFNO: 33,
      DEAL_DD: 10,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "68,000",
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
      DEAL_MM: "01",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 18,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.8848,
      APTFNO: 6,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "63,900",
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
      DEAL_MM: "01",
      BLDG_NM: "창원중동유니시티2단지",
      BUBN: null,
      HO_CODE: 111,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20391946,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.1031,
      APTFNO: 29,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지)",
      SUM_AMT: "71,500",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
  ]
  res.status(200).json(data)
}