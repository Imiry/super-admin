module.exports = {
  // 表示当前的目录即为根目录，eslint规则将限制到改目录
  root: true,
  // env表示启用eslint检测的环境
  env: {
    // 在node环境下启动eslint
    node: true
  },
  // eslint基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  // 解析器
  parserOptions: {
    ecmaVersion: 2020
  },
  // 需要修改的启用规则及其各自的错误规则
  /**
   * 错误级别分三种：
   * "off" 或 "0" -关闭规则
   * "off" 或 "1" -开启规则，使用警告级别的错误，warn（不会导致程序退出）
   * "off" 或 "0" -开启规则，使用警告级别的错误，error（当被触发的时候，程序会退出）
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-trailing-spaces':'off',
    // 'key-spacing':'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 'off'
    // 'key-spacing':'off',
    // 'no-multi-spaces':'off',
    // 'no-multiple-empty-lines':'off'
  }
}
