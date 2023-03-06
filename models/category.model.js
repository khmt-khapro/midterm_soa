const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish' // tham chiếu đến schema Dish
    }]

}, { timestamps: true })

const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;