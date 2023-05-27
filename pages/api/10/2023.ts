import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "05",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 27,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 4,
      DEAL_DD: 17,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "34,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 13,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "05",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 36,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6947,
      APTFNO: 8,
      DEAL_DD: 15,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "37,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "05",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 129,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 27,
      DEAL_DD: 5,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "34,800",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 5,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 2,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "31,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 34,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9409,
      APTFNO: 10,
      DEAL_DD: 23,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "49,500",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 96,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9952,
      APTFNO: 25,
      DEAL_DD: 22,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "48,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 22,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 5,
      DEAL_DD: 17,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "33,500",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 94,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 20,
      DEAL_DD: 15,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "36,500",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 83,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 18,
      DEAL_DD: 13,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "35,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 35,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 8,
      DEAL_DD: 10,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "36,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 41,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 9,
      DEAL_DD: 8,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "35,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 7,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 88,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.1787,
      APTFNO: 18,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "50,000",
      RDEALER_LAWDNM: "경남 창원마산합포구, 경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "04",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 42,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9409,
      APTFNO: 11,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "52,000",
      RDEALER_LAWDNM: "경남 창원마산합포구, 경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 11,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 87,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 71.2807,
      APTFNO: 18,
      DEAL_DD: 24,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "44,300",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 24,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9952,
      APTFNO: 6,
      DEAL_DD: 22,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "46,400",
      RDEALER_LAWDNM: "경남 창원마산합포구, 경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 11,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 108,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9952,
      APTFNO: 28,
      DEAL_DD: 19,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "50,000",
      RDEALER_LAWDNM: "경남 창원마산회원구, 경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 32,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 7,
      DEAL_DD: 17,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "34,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 71,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6947,
      APTFNO: 15,
      DEAL_DD: 16,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "34,000",
      RDEALER_LAWDNM: "경남 창원마산회원구, 경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 6,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 2,
      DEAL_DD: 10,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "33,500",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 18,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.1787,
      APTFNO: 4,
      DEAL_DD: 6,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "43,500",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 86,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9409,
      APTFNO: 23,
      DEAL_DD: 4,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "46,500",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "03",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 94,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 20,
      DEAL_DD: 3,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "35,200",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 47,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9409,
      APTFNO: 12,
      DEAL_DD: 27,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "45,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 12,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 119,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 25,
      DEAL_DD: 24,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "36,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 24,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 84.9952,
      APTFNO: 6,
      DEAL_DD: 20,
      DPOS_GBN: "C",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "46,400",
      RDEALER_LAWDNM: "경남 창원마산합포구, 경남 창원마산회원구",
      CNTL_YMD: "20230321",
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 11,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 157,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 32,
      DEAL_DD: 19,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "37,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 125,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 26,
      DEAL_DD: 18,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "36,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 127,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6947,
      APTFNO: 26,
      DEAL_DD: 11,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "38,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 79,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 17,
      DEAL_DD: 9,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "36,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 13,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 3,
      DEAL_DD: 6,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "34,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 7,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "02",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 119,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 59.6825,
      APTFNO: 25,
      DEAL_DD: 3,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "36,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 7,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "300",
      LAND_USE_NM:
        "[포함]제3종일반주거지역,[포함]지구단위계획구역,[저촉]대로1류,[저촉]중로1류,[저촉]중로2류,[접합]제2종일반주거지역",
      DEAL_MM: "01",
      BLDG_NM: "창원메트로시티석전",
      BUBN: null,
      HO_CODE: 46,
      ROAD_LEN: "25m이상",
      BLDG_CD: 20401811,
      LAND_MOVE1: "202*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "246~250%",
      BLDG_AREA: 72.1787,
      APTFNO: 10,
      DEAL_DD: 30,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[포함]정비구역<도시및주거환경정비법>(석전1구역 주택재개발사업),[저촉]상대정화구역<학교보건법>(북성초등학교)",
      SUM_AMT: "43,000",
      RDEALER_LAWDNM: "경남 창원마산회원구",
      CNTL_YMD: null,
      BC_RAT: "11~15%",
      DNAME: "석전동",
      BUILD_YEAR: 2019,
      JIBUN_NAME: "경상남도 창원마산회원구  석전동",
      DONG_CODE: 4,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
  ]
  res.status(200).json(data)
}
