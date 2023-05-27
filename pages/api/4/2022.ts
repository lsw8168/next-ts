import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "12",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 94,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7886,
      APTFNO: 25,
      DEAL_DD: 30,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "62,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "12",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 134,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7886,
      APTFNO: 35,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "69,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "11",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 21,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7171,
      APTFNO: 7,
      DEAL_DD: 24,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "70,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "11",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 106,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7886,
      APTFNO: 28,
      DEAL_DD: 9,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "74,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "11",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 46,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7886,
      APTFNO: 13,
      DEAL_DD: 3,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "71,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "10",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 77,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.928,
      APTFNO: 21,
      DEAL_DD: 25,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "75,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "10",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 10,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7886,
      APTFNO: 4,
      DEAL_DD: 3,
      DPOS_GBN: "C",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "76,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: "20221221",
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "09",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 16,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9622,
      APTFNO: 5,
      DEAL_DD: 27,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "56,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "08",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 112,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7171,
      APTFNO: 29,
      DEAL_DD: 27,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "77,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 10,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "08",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 45,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9622,
      APTFNO: 13,
      DEAL_DD: 16,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "55,000",
      RDEALER_LAWDNM: "경남 김해시, 경남 창원의창구",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "08",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 71,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9622,
      APTFNO: 19,
      DEAL_DD: 12,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "54,850",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "07",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 119,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 100.3072,
      APTFNO: 31,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "96,500",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "05",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 30,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7886,
      APTFNO: 9,
      DEAL_DD: 21,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "85,000",
      RDEALER_LAWDNM: "경남 창원의창구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "05",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 56,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.9622,
      APTFNO: 15,
      DEAL_DD: 16,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "63,200",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "05",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 29,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.928,
      APTFNO: 9,
      DEAL_DD: 5,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "77,500",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 93,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7171,
      APTFNO: 25,
      DEAL_DD: 25,
      DPOS_GBN: "C",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "87,000",
      RDEALER_LAWDNM: "경남 창원마산합포구, 경남 창원마산회원구",
      CNTL_YMD: "20220323",
      BC_RAT: "11~15%",
      DNAME: "중동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원의창구  중동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 93,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7171,
      APTFNO: 25,
      DEAL_DD: 25,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "87,000",
      RDEALER_LAWDNM: "경남 창원마산합포구, 경남 창원마산회원구",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "02",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 47,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7171,
      APTFNO: 13,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "85,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "01",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 45,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7171,
      APTFNO: 13,
      DEAL_DD: 29,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "89,000",
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
      BOBN: "786",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[접합]자연녹지지역,[접합]중로1류,[접합]중로2류,[접합]근린공원,[접합]경관녹지",
      DEAL_MM: "01",
      BLDG_NM: "창원중동유니시티3단지",
      BUBN: null,
      HO_CODE: 10,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20396471,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.7886,
      APTFNO: 4,
      DEAL_DD: 8,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]국가산업단지<산업입지및개발에관한법률>,[저촉]상대정화구역<학교보건법>(고등학교 설립예정지),[저촉]상대정화구역<학교보건법>(도계중학교),[저촉]상대정화구역<학교보건법>(의창초등학교),[저촉]상대정화구역<학교보건법>(중학교 설립예정지),[저촉]절대정화구역<학교보건법>(고등학교설립예정지),[저촉]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한)",
      SUM_AMT: "86,000",
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
  ]
  res.status(200).json(data)
}