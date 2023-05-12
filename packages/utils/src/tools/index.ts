/**
 * 判断目标值是否为字符串
 * @param val 参数
 * @returns boolean
 */
export const isString = (val: any): boolean => {
  return typeof val === 'string'
}

/**
 * 判断目标值是否为数字
 * @param val 参数
 * @returns boolean
 */
export const isNumber = (val: any): boolean => {
  return typeof val === 'number'
}