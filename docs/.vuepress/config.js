module.exports = {
  title: 'starter',
  description: '',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'starter',
      description: '',
    },
  },
  themeConfig: {
    logo: '/assets/img/logo.webp',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档简介',
        link: '/guide/',
      },
    ],
    sidebar: {},
    sidebarDepth: 2,
    activeHeaderLinks: false,
    lastUpdated: '上次更新',
    repo: 'tlyboy/starter',
    docsRepo: 'tlyboy/starter',
    docsDir: 'vuepress/docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true,
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    lineNumbers: true,
  },
}
