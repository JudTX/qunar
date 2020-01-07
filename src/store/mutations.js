export default {
  changecity (state, city) {
    state.city = city
    // 使用localStorage存储用户选择的城市
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
