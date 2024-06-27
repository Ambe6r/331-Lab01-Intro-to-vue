const { createApp, ref } = Vue

createApp({
  setup() {
    const product = ref('Boots')
    const description = ref('A pair of fashionable, comfortable boots.')
    const image = ref('./assets/images/socks_green.jpg')
    const productLink = ref('https://www.camt.cmu.ac.th')
    return { product, description, image, productLink }
  }
}).mount('#app')
