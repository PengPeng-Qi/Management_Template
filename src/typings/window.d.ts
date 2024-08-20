/** 声明文件 */
declare global {
  interface Navigator {
    browserLanguage: string;
  }
}

// 确保该文件是一个模块，而不是一个脚本
export {};

/**
 * 如果一个文件没有 import、export 语句，会被视为一个全局脚本，
 * 在全局脚本中，所有的声明都会被添加到全局命名空间中，这会导致多个脚本之间的命名冲突。
 *
 * 声明为一个模块可以避免，因为所有的声明都是局部的。
 */
