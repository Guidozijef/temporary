Page({
  data: {
    showAction: false
  },
  showActionSheet() {
    this.setData({ showAction: true });
  },
  hideActionSheet() {
    this.setData({ showAction: false });
  },
  stopProp() {
    // Prevent event bubbling
  },
  goToEdit() {
    this.hideActionSheet();
    wx.navigateTo({
      url: '/pages/edit/edit'
    });
  },
  switchTab(e) {
    const path = e.currentTarget.dataset.path;
    wx.redirectTo({
      url: path
    });
  }
});
