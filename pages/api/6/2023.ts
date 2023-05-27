import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = [
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "05",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 82,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 22,
      DEAL_DD: 20,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "51,800",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "05",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 8,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 84.9968,
      APTFNO: 3,
      DEAL_DD: 20,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "62,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 10,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "05",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 24,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 7,
      DEAL_DD: 9,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "48,750",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "04",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 2,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 73.7334,
      APTFNO: 2,
      DEAL_DD: 29,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "55,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 12,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "04",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 25,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 73.7334,
      APTFNO: 8,
      DEAL_DD: 29,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "56,600",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "04",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 59,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 16,
      DEAL_DD: 27,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "50,900",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "04",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 50,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 84.9004,
      APTFNO: 14,
      DEAL_DD: 24,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "69,300",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 2,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 7,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 3,
      DEAL_DD: 25,
      DPOS_GBN: "C",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "45,500",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: "20230302",
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 7,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 3,
      DEAL_DD: 25,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "45,500",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 11,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 4,
      DEAL_DD: 25,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "46,700",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 19,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 84.9004,
      APTFNO: 6,
      DEAL_DD: 24,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "69,200",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 1,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 85,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 24,
      DEAL_DD: 17,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "49,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 104,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 84.9004,
      APTFNO: 29,
      DEAL_DD: 15,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "69,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 2,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 20,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 84.9584,
      APTFNO: 11,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "63,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 5,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 33,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 84.9968,
      APTFNO: 10,
      DEAL_DD: 5,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "60,000",
      RDEALER_LAWDNM: "경남 창원마산합포구, 경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 10,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "02",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 75,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 20,
      DEAL_DD: 3,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "45,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 40,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 11,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "46,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 9,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 63,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 17,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "45,000",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 12,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 83,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 22,
      DEAL_DD: 28,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "44,700",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 8,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 81,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 73.7334,
      APTFNO: 22,
      DEAL_DD: 14,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "52,500",
      RDEALER_LAWDNM: "경남 김해시, 경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 6,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 62,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 84.9004,
      APTFNO: 17,
      DEAL_DD: 14,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "59,500",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 11,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 28,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 8,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "45,500",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 3,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 72,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 19,
      DEAL_DD: 7,
      DPOS_GBN: "C",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "42,600",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: "20230417",
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 12,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
    {
      BOBN: "12",
      LAND_USE_NM:
        "[포함]제2종전용주거지역,[포함]지구단위계획구역,[접합]제1종일반주거지역,[접합]중로1류,[접합]중로2류,[접합]소공원",
      DEAL_MM: "01",
      BLDG_NM: "창원센텀푸르지오",
      BUBN: null,
      HO_CODE: 72,
      ROAD_LEN: "25m미만",
      BLDG_CD: 20360987,
      LAND_MOVE1: "201*",
      LAND_MOVE2: "토지개발사업 완료",
      GRND_FLR_CNT: "-",
      VL_RAT: "216~220%",
      BLDG_AREA: 59.9573,
      APTFNO: 19,
      DEAL_DD: 7,
      DPOS_GBN: "2",
      LAND_USE_LAW:
        "[포함]가축사육제한구역<가축분뇨의관리및이용에관한법률>(전부제한),[저촉]상대정화구역<학교보건법>(남정초등학교),[저촉]상대정화구역<학교보건법>(창원천광학교),[저촉]절대정화구역<학교보건법>(남정초등학교),[저촉]절대정화구역<학교보건법>(창원천광학교)",
      SUM_AMT: "42,600",
      RDEALER_LAWDNM: "경남 창원성산구",
      CNTL_YMD: null,
      BC_RAT: "16~20%",
      DNAME: "가음동",
      BUILD_YEAR: 2018,
      JIBUN_NAME: "경상남도 창원성산구  가음동",
      DONG_CODE: 12,
      REQ_GBN: "중개거래",
      ETC_STRCT: "철근콘크리트구조",
    },
  ]
  res.status(200).json(data)
}