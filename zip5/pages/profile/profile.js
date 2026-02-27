Page({
  data: {
    statusBarHeight: 20,
    navBarHeight: 44,
    days: [
      { date: 28, prev: true }, { date: 29, prev: true }, { date: 30, prev: true }, { date: 31, prev: true },
      { date: 1 }, { date: 2 }, { date: 3 }, { date: 4, hasRecord: true },
      { date: 5 }, { date: 6 }, { date: 7 }, { date: 8 },
      { date: 9 }, { date: 10 }, { date: 11 }, { date: 12 },
      { date: 13 }, { date: 14 }, { date: 15 }, { date: 16 },
      { date: 17 }, { date: 18 }, { date: 19 }, { date: 20 },
      { date: 21 }, { date: 22 }, { date: 23 }, { date: 24 },
      { date: 25 }, { date: 26, hasRecord: true }, { date: 27 }, { date: 28 }
    ],
    activeDate: 26,
    inspirations: [
      { id: 1, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop', title: '春季极简风', likes: '1.2k', author: 'Vogue' },
      { id: 2, img: 'https://images.unsplash.com/photo-1434389678232-040b50774107?w=400&h=600&fit=crop', title: '周末出游穿搭', likes: '856', author: 'OOTD 日常' }
    ]
  },
  onLoad() {
    const sysInfo = wx.getSystemInfoSync();
    const menuButton = wx.getMenuButtonBoundingClientRect();
    this.setData({
      statusBarHeight: sysInfo.statusBarHeight,
      navBarHeight: (menuButton.top - sysInfo.statusBarHeight) * 2 + menuButton.height
    });
  },
  selectDate(e) {
    if (!e.currentTarget.dataset.prev) {
      this.setData({ activeDate: e.currentTarget.dataset.date });
    }
  },
  switchTab(e) {
    const path = e.currentTarget.dataset.path;
    wx.redirectTo({ url: path });
  }
});
