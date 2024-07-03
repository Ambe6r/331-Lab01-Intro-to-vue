/* 8.5
const { createApp, ref, computed } = Vue

createApp({
  setup() {
    const product = ref('Boots')
    const brand = ref('SE 331')
    //description of boots
    //const description = ref('A pair of fashiinonable, comfortable boots.')
    //const image = ref('./assets/images/socks_green.jpg')
    //const inStock = ref(true)
    const inventory = ref(100)
    const onSale = ref(true)
    const details = ref([
        '50% cotton',
        '30% wool',
        '20% polyester'
    ]);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
    ]);
    const selectedVariant = ref(0)
    const sizes = ref(['S', 'M', 'L']);
    //click boots turn to camt
    //const productLink = ref('https://www.camt.cmu.ac.th')
    const cart = ref(0)


    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });
    
    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity > 0;
    });
    

    const title = computed(() => {
      return brand.value + ' ' + product.value
    })

    const saleMessage = computed(() => {
      if (onSale.value) {
        return `${brand.value} ${product.value} is on sale!`;
      }
      return '';
    });

    function addToCart() {
      cart.value += 1
    }

    function updateVariant(index) {
      selectedVariant.value = index;
    }

    function updateImage(variantImage) {
      image.value = variantImage
    }

    function toggleInStock() {
      variants.value[selectedVariant.value].quantity = !variants.value[selectedVariant.value].quantity;
      // Update onSale based on new quantity
      onSale.value = variants.value[selectedVariant.value].quantity > 0;
    }
  
    function toggleOnSale() {
      // 反转促销状态
      onSale.value = !onSale.value;
    }

    


      //description,
      //product,
      //brand,
      //        toggleOnSale
    return { 
        product,
        brand,
        title,
        image,
        inStock,
        inventory,
        onSale,
        saleMessage,
        details,
        variants,
        sizes,
        cart,
        selectedVariant,
        updateVariant,
        addToCart,
        updateImage,
        toggleInStock,
        toggleOnSale
     }
  }
}).mount('#app')

*/


// 9 main.js
const { createApp, ref, computed, reactive, toRefs} = Vue

const app = createApp({
  setup(){
    const cart = ref([])
    const premium = ref(true)

    function updateCart(id) {
      cart.value.push(id);
    }

    function removeFromCart(id) {
      const index = cart.value.indexOf(id);
      if (index > -1) {
        cart.value.splice(index, 1);
      }
    }

    const cartItemCount = computed(() => {
      const itemCount = {};
      cart.value.forEach(id => {
        if (!itemCount[id]) {
          itemCount[id] = 1;
        } else {
          itemCount[id]++;
        }
      });
      return itemCount;
    });

    return {
      cart,
      premium,
      cartItemCount,
      updateCart,
      removeFromCart,
  }
}
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)
app.mount('#app')
