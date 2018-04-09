const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'VuePress',
  description: 'Minimalistic docs generator with Vue component based layout system',
  dest: 'vuepress',
  base,
  head: [
    ['link', { rel: 'icon', href: `${base}logo.png` }]
  ],
  themeConfig: {
    github: 'vuejs/vuepress',
    // sidebar config
    sidebar: [
      {
        title: 'Guide',
        children: [
          '/',
          '/getting-started',
          '/markdown',
          '/assets',
          '/using-vue',
          '/default-theme',
          '/custom-themes',
          '/deploy'
        ]
      },
      {
        title: 'Config Reference',
        children: [
          '/config',
          '/test/'
        ]
      }
    ],

    // multi-category sidebar config

    // sidebar: {
    //   '*': [/* ... */],
    //   '/guide/': [/* ... */],
    //   '/tutorial/': [/* ... */],
    //   '/api/': [/* ... */]
    // },

    // navbar config

    // nav: [
    //   {
    //     title: 'Guide',
    //     link: '/getting-started',
    //   },
    //   // ...
    // ]
  }
}
