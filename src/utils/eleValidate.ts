/** 常用 element 表单校验规则 */

/**
 * @rule 中国大陆手机号
 */
export function validatePhoneNumber(rule: any, value: any, callback: any) {
  const phoneRegex = /^1[3-9]\d{9}$/ // 中国大陆手机号码正则表达式，根据需要调整

  if (value === '' || value === undefined || value === null) {
    callback(new Error('请输入电话号码'))
  } else if (!phoneRegex.test(value)) {
    callback(new Error('请输入有效的电话号码'))
  } else {
    callback()
  }
}

/**
 * @rule 邮箱
 */
export function validateEmail(rule: any, value: any, callback: any) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  if (value === '' || value === undefined || value === null) {
    callback(new Error('请输入电子邮件地址'))
  } else if (!emailRegex.test(value)) {
    callback(new Error('请输入正确的电子邮件地址'))
  } else {
    callback()
  }
}
