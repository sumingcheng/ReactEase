// 图片预加载代理
const imagePreloader = {
  // 待加载的图片列表
  imageList: [],
  // 加载完成的图片列表
  loadedImageList: [],
  // 加载单张图片的方法
  loadImage(url) {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        console.log(`${url} has been loaded`)
        this.loadedImageList.push(url)
        resolve()
      }
      img.src = url
    })
  },
  // 预加载图片方法
  preloadImage() {
    const loadImagePromises = this.imageList.map((url) => {
      // 只加载还未加载过的图片
      if (!this.loadedImageList.includes(url)) {
        return this.loadImage(url)
      }
      return Promise.resolve()
    })

    Promise.all(loadImagePromises).then(() => {
      console.log('all images have been loaded')
    })
  },
  // 添加需要预加载的图片的方法
  addImage(url) {
    if (!this.imageList.includes(url)) {
      this.imageList.push(url)
    }
  },
}

// 加载一些图片
imagePreloader.addImage('https://example.com/image1.jpg')
imagePreloader.addImage('https://example.com/image2.jpg')
imagePreloader.addImage('https://example.com/image3.jpg')

// 开始预加载图片
imagePreloader.preloadImage()
