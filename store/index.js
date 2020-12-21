// 为了防止数据冲突，务必要将 state 定义为工厂函数动态生成实例
export const state = () => {
  return {
    user: null,
  }
}
