const { createApp, ref } = Vue

createApp({
  setup() {
    const product = ref('Boots')
    const description = ref('A pair of fashionable, comfortable boots.')
    const image = ref('./assets/images/socks_green.jpg')
    const inStock = ref(true);
    const inventory = ref(100);
    const onSale = ref(true);
    const details = ref([
        '50% cotton',
        '30% wool',
        '20% polyester'
    ]);
    const variants = ref([
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' }
    ]);
    const sizes = ref(['S', 'M', 'L']);
    const productLink = ref('https://www.camt.cmu.ac.th')
    return { 
        product,
        image,
        inStock,
        inventory,
        onSale,
        details,
        variants,
        sizes
     }
  }
}).mount('#app')
