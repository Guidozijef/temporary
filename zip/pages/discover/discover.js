Page({
  data: {
    topItem: '👚',
    bottomItem: '👖',
    shoeItem: '👠',
    isGenerating: false,
    btnText: '随机生成穿搭'
  },
  
  switchTab(e) {
    const path = e.currentTarget.dataset.path;
    wx.redirectTo({
      url: path
    });
  },

  simulateSpin() {
    if (this.data.isGenerating) return;

    const tops = ['👚', '🧥', '🎽', '👔', '👕'];
    const bottoms = ['👖', '🩳', '👗'];
    const shoes = ['👟', '🥿', '👠', '🥾'];

    this.setData({
      isGenerating: true,
      btnText: '生成中...'
    });

    let count = 0;
    const interval = setInterval(() => {
      this.setData({
        topItem: tops[Math.floor(Math.random() * tops.length)],
        bottomItem: bottoms[Math.floor(Math.random() * bottoms.length)],
        shoeItem: shoes[Math.floor(Math.random() * shoes.length)]
      });
      
      count++;
      if (count > 10) {
        clearInterval(interval);
        this.setData({
          isGenerating: false,
          btnText: '完美搭配！再次生成'
        });
      }
    }, 100);
  }
});
