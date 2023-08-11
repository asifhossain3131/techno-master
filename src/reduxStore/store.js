const { default: productsReducer } = require("@/features/productsSlice");
const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    reducer:{
        cartProducts:productsReducer
    }
})

export default store