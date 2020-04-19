module.exports = {
  title: 'Innovet-AdafruitIO-SO',
  description: 'Handleiding Adafruit.IO cloud platform',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'http://sint-rembert.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/inleiding/', 'Inleiding'],
      ['/aansturen-digitale-uitgang/', 'Aansturen digitale uitgang'],
      ['/weergave-digitale-waarde/', 'Weergave digitale waarde'],
      ['/componentenlijst/', 'Componentenlijst']
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet-AdafruitIO-SO.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
