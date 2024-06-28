const { createApp, ref } = Vue

createApp({
  setup() {
    const product = ref('Boots')
    //description of boots
    const description = ref('A pair of fashionable, comfortable boots.')
    const image = ref('./assets/images/socks_green.jpg')
    const inStock = ref(true)
    const inventory = ref(100)
    const onSale = ref(true)
    const details = ref([
        '50% cotton',
        '30% wool',
        '20% polyester'
    ]);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
    ]);
    const sizes = ref(['S', 'M', 'L']);
    //click boots turn to camt
    const productLink = ref('https://www.camt.cmu.ac.th')
    const cart = ref(0)

    function addToCart() {
      cart.value += 1
    }

    function updateImage(variantImage) {
      image.value = variantImage
    }

    function toggleInStock() {
      if (inventory.value > 0) {
        inventory.value = 0
      } else {
        inventory.value = 100  // 可以根据需要设置其他值
      }
    }

      //description,
    return { 
        product,
        image,
        inStock,
        inventory,
        onSale,
        details,
        variants,
        sizes,
        cart,
        addToCart,
        updateImage,
        toggleInStock
     }
  }
}).mount('#app')
