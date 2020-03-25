module.exports = {
  head: {
    title: 'Vue Myself',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  // transition: {
  //   name: 'fade',
  //   mode: 'out-in',
  //   beforeEnter(el) {
  //     // el => 페이지 컴포넌트 DOM 객체
  //     console.log('페이지 트랜지션 진입', el)
  //   }
  // },
  modules: [
    '@nuxtjs/axios',
    "nuxt-mq",
    "nuxt-clipboard2",
  ],
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  mq: {
    defaultBreakpoint: "test",
    breakpoints: {
      mobile: 550,
      tablet: 890,
      labtop: 1290,
      pc: Infinity
    }
  },
  axios: {
    browserBaseURL: 'http://localhost:3085', //클라이언트에서 axios보낼 때
    baseURL: 'http://localhost:3085', //서버에서 axios보낼 때
    //baseURL 설정 하면 store에 axios요청 보내는 부분에 자동으로 위 기본URL 대입됨.
    https: false,
  },
  css: [
    '~/css/reset.css'
  ],
  plugins: [
    "@/plugins/fontawesome.js",
    // { src: '~/plugins/swiper.js', ssr: false },
  ],
};