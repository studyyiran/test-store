import moment from "moment";

export function testMoment() {
  const a = moment();
  const b = moment(undefined)
  console.log(a)
  console.log(b)
  console.log(moment(a).isSame(b))
  // const timeArr = [
  //   {
  //     groupOrderNo: "XS2019112809484657614114",
  //     createdDt: "2019-11-28 04:48:47",
  //     userEmail: "yiran.sun@aihuishou.com",
  //     suborderList: [
  //       {
  //         subOrderNo: "2019112809484796901981",
  //         productName: "OnePlus 7 128GB T-Mobile Mirror Gray",
  //         status: "TO_BE_SHIPPED",
  //         img:
  //           "https://qa-uptrade.s3.us-east-2.amazonaws.com/buy/mob/Galaxy S6 _f5bbda6fffdd4145b5ac91eb9e03b48f_dbb36b665100435cbff8b0af66c58c3f.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     groupOrderNo: "XS2019120204100349549755",
  //     createdDt: "2019-12-01 23:10:04",
  //     userEmail: "yiran.sun@aihuishou.com",
  //     suborderList: [
  //       {
  //         subOrderNo: "2019120204100432992227",
  //         productName: "iPhone 6 16GB Verizon Space Gray",
  //         status: "TRANSACTION_FAILED",
  //         img:
  //           "https://d3c745jesl5pj3.cloudfront.net/buy/mob/IMG_4038_332bb3eda7ff4b9bb1fc0aacd00c880f.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     groupOrderNo: "XS2019120204110310831787",
  //     createdDt: "2019-12-01 23:11:04",
  //     userEmail: "yiran.sun@aihuishou.com",
  //     suborderList: [
  //       {
  //         subOrderNo: "2019120204110416696971",
  //         productName: "Galaxy S6  32GB AT&T Black Sapphire",
  //         status: "TRANSACTION_FAILED",
  //         img:
  //           "https://d3c745jesl5pj3.cloudfront.net/buy/mob/IMG_3281_ced87e2374974708a836c5480da45e2a.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     groupOrderNo: "XS2019120409311106009218",
  //     createdDt: "2019-12-04 04:31:12",
  //     userEmail: "yiran.sun@aihuishou.com",
  //     suborderList: [
  //       {
  //         subOrderNo: "2019120409311229695656",
  //         productName: "Galaxy S10 Plus 512GB AT&T Ceramic Black",
  //         status: "TO_BE_SHIPPED",
  //         img:
  //           "https://qa-uptrade.s3.us-east-2.amazonaws.com/buy/mob/Galaxy S6 _f5bbda6fffdd4145b5ac91eb9e03b48f_b9dcdb2901d8438dbf23d377c6cea282.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     groupOrderNo: "HS2019120404082628611801",
  //     createdDt: "2019-12-03 23:08:26",
  //     userEmail: "yiran.sun@aihuishou.com",
  //     suborderList: [
  //       {
  //         subOrderNo: "2019120404082819914260",
  //         productName: "iPhone XS Max 64GB AT&T",
  //         status: "TO_BE_SHIPPED",
  //         img:
  //           "https://d3c745jesl5pj3.cloudfront.net/sell/iPhone XS Max_54bf0ce7b6a24572a55a4aa2d8bb2859.jpg"
  //       }
  //     ]
  //   }
  // ];
  // console.log(
  //   timeArr.sort((a: any, b: any) => {
  //     console.log(moment(a.createdDt));
  //     console.log(moment(b.createdDt));
  //     console.log(moment(b.createdDt).isBefore(a.createdDt));
  //     return -1;
  //   })
  // );
}
