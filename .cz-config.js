module.exports = {
  types: [
    { type: 'feat', name: 'feat:    新功能' },
    { type: 'fix', name: 'fix:    修复' },
    { type: 'docs', name: 'docs:    文档变更' },
    { type: 'style', name: 'style:    代码格式（不影响代码运行的变动）' },
    { type: 'refactor', name: 'refactor:    重构（既不是增加的feature，也不是修复bug）' },
    { type: 'perf', name: 'perf:    性能有坏' },
    { type: 'test', name: 'test:    增加测试' },
    { type: 'chore', name: 'feat:    构建过程或辅助工具的变动' },
    { type: 'revert', name: 'revert:    回退' },
    { type: 'build', name: 'feat:    打包' }
  ],
  messages: {
    type: '请选择提交的类型: ',
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交（必填）',
    body: '请输入详细描述（可选）',
    footer: '请输入要关闭的issure（可选）',
    confirmCommit: '确认要使用以上信息提交？（y/n）'
  },
  // 跳过步骤
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72
}
