import ajax from "../../../common/utils/ajax";
import { getTestAjaxResultMock } from "./mock";

/**
 * 首页相关
 * */
export const TestAjaxUrl = "/reviewPart/getReviewList";

export async function getTestAjaxResult(data: any) {
  const res: any = await ajax.post(TestAjaxUrl, data);
  return getTestAjaxResultMock;
  return res;
}
