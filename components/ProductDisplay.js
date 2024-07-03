const productDisplay = {
  template: 
  `
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" alt="Product Image" :class="{ 'out-of-stock-image': !inStock }">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <!--
                    <p>{{description}}</p>
                    -->
                    <p v-if="inventory > 10">In Stock</p>
                    <p v-else-if="inventory <= 10 && inventory > 0">Almost Out of Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>shipping: {{shipping}}</p>
                    <p v-if="onSale && inStock">{{ saleMessage }}</p>

                    <product-details :details = "details"></product-details>

                    <div v-for="(variant, index) in variants" :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{backgroundColor: variant.color}">
                    </div>
                    <p>Sizes: {{ sizes.join(', ') }}</p>
                    <button class="button" :disabled="!inStock" @click="addToCart" :class="{ disabledButton: !inStock }"> Add To Cart </button>
                    <button class="button" @click="removeFromCart">Remove From Cart</button>
                    <button class="button" @click="toggleInStock">Toggle In Stock</button>
                </div>
  `,

  props:{
    premium: Boolean
  },
  setup(props, { emit }) {
    const shipping = computed(() =>{
      if(props.premium){
          return 'Free'
      } else {
          return 30
      }
  })
    const product = ref('Boots');
    const brand = ref('SE 331');
    //const description = ref('A pair of fashiinonable, comfortable boots.')
    // const image = ref('./assets/images/socks_green.jpg')
    // const inStock = ref(true)
    const inventory = ref(100);
    const onSale = ref(true)
    //const inStock = ref(true)
    const details = ref([
      '50% cotton',
      '30% wool',
      '20% polyester'
    ]);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
    ]);
    const selectedVariant = ref(0);
    const sizes = ref(['S', 'M', 'L']);
    const cart = ref(0);

    function updateVariant(index) {
      selectedVariant.value = index;
    }

    function updateImage(variantImage){
      image.value = variantImage
    }

    function addToCart() {
      emit('add-to-cart', variants.value[selectedVariant.value].id);
    }

    function removeFromCart() {
      emit('remove-from-cart', variants.value[selectedVariant.value].id);
    }


    function toggleInStock() {
      variants.value[selectedVariant.value].quantity = !variants.value[selectedVariant.value].quantity;
      onSale.value = variants.value[selectedVariant.value].quantity > 0;
    }

    function toggleOnSale() {
      // 反转促销状态
      onSale.value = !onSale.value;
    }

    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity > 0;
    });


    const title = computed(() => {
      return `${brand.value} ${product.value}`;
    });

    const saleMessage = computed(() => {
      if (onSale.value) {
        return `${brand.value} ${product.value} is on sale!`;
      }
      return '';
    });

    return {
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
      shipping,
      updateImage,
      addToCart,
      removeFromCart,
      updateVariant,
      toggleInStock,
      toggleOnSale
    };
  }
};
