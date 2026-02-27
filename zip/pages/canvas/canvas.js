Page({
  switchTab(e) {
    const path = e.currentTarget.dataset.path;
    wx.redirectTo({
      url: path
    });
  }
});
