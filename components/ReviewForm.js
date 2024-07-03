const reviewForm = {
    template:
    /*html*/
    
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name :</label>
        <input id="name" v-model="name">

        <label for="review">Review :</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating :</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <!--

        <label for="recommend">Would you recommend this product? :</label>
        <span>
        <input type="checkbox" id="recommended" v-model="form.recommendded"style="width:50%" />
        <label for="recommendded">Yes</label>
        </span>
        -->

        <label for="recommend">Would you recommend this product? :</label>
        <span>
            <input type="radio" id="recommendYes" value="yes" v-model="recommend" />
            <label for="recommendYes">Yes</label>
            <input type="radio" id="recommendNo" value="no" v-model="recommend" />
            <label for="recommendNo">No</label>
        </span>

        <input class="button" type="submit" value="Submit">
    </form>
    `,

    setup(props,{emit}){
        const form = reactive({
            name: '',
            review: '',
            rating: null,
            recommend: null
            //recommendded: Boolean

        });

        function onSubmit(){
            if(form.name === '' || form.review === '' || form.rating === null || form.recommendded === false){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            //console.log('Form submitted');
            const productReview = {
                name: form.name,
                review: form.review,
                rating: form.rating,
                recommend: form.recommend
                //recommendded: form.recommendded
            };
            emit('review-submitted', productReview)
            console.log('Submitted Review:', productReview);
            form.name = '';
            form.review = '';
            form.rating = null;
            //form.recommendded === false
            form.recommend = null
        }

        return{
            ...toRefs(form),
            onSubmit
        };
    }
    
};

