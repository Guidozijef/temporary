Page({
  data: {
    activeDate: 26,
    days: []
  },

  onLoad() {
    this.generateDays();
  },

  generateDays() {
    const days = [];
    // Prev month days
    for(let i=25; i<=31; i++) {
      days.push({ date: i, prev: true, hasRecord: false });
    }
    // Current month days
    for(let i=1; i<=28; i++) {
      days.push({ 
        date: i, 
        prev: false, 
        hasRecord: [2, 5, 14, 26].includes(i) // Mock some records
      });
    }
    this.setData({ days });
  },

  selectDate(e) {
    const { date, prev } = e.currentTarget.dataset;
    if (!prev) {
      this.setData({ activeDate: date });
    }
  },

  prevMonth() {
    wx.showToast({ title: '上个月', icon: 'none' });
  },

  nextMonth() {
    wx.showToast({ title: '下个月', icon: 'none' });
  },

  viewRecord() {
    wx.showToast({ title: '查看穿搭详情', icon: 'none' });
  },

  goToCapsule() {
    wx.navigateTo({ url: '/pages/capsule/capsule' });
  },

  switchTab(e) {
    const path = e.currentTarget.dataset.path;
    wx.redirectTo({ url: path });
  }
});
