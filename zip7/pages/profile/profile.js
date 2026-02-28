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
    capsules: [
      { id: 1, title: '五一去大理', count: 12, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop' },
      { id: 2, title: '下周打工装', count: 5, img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=200&fit=crop' }
    ],
    randomLook: null,
    isGenerating: false,
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
  goToCapsule() {
    wx.navigateTo({ url: '/pages/capsule/capsule' });
  },
  generateRandomLook() {
    if (this.data.isGenerating) return;
    
    this.setData({ isGenerating: true });
    
    // Simulate API call or generation process
    setTimeout(() => {
      const emojis = ['🧥👖', '👗👠', '🎽👟', '👕🩳', '👔👞'];
      const titles = ['今日通勤推荐', '周末休闲风', '运动活力装', '约会晚宴风'];
      const bgs = ['#F3E8FF', '#FFE4E6', '#E0F2FE', '#DCFCE7', '#FEF3C7'];
      
      const randomIdx = Math.floor(Math.random() * emojis.length);
      const randomTitleIdx = Math.floor(Math.random() * titles.length);
      
      this.setData({
        isGenerating: false,
        randomLook: {
          emoji: emojis[randomIdx],
          title: titles[randomTitleIdx],
          bg: bgs[randomIdx]
        }
      });
    }, 800);
  },
  saveRandomLook() {
    wx.showToast({
      title: '已保存到穿搭',
      icon: 'success'
    });
  },
  switchTab(e) {
    const path = e.currentTarget.dataset.path;
    wx.redirectTo({ url: path });
  }
});
