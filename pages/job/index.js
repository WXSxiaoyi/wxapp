Page({
  data: {
    flag: true
  },
  one() {
    this.setData({
      flag: !this.data.flag
    })
  },
  two() {
    this.setData({
      flag: !this.data.flag
    })
  }
});
