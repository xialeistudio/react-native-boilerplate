/**
 * @date 2017/3/23
 * @author xialeistudio<1065890063@qq.com>
 */
export default class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
