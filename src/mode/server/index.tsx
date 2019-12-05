import { getTestAjaxResultMock } from "./mock";
/**
 * 首页相关
 * */
export const TestAjaxUrl = "/reviewPart/getReviewList";

export async function getTestAjaxResult(data: any) {
  return getTestAjaxResultMock;
}
