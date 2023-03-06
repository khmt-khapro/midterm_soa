const mongoose = require("mongoose")

const dishSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    images: {
        type: [String],
        required: true
    },
    description: String,
    isExist: {
        type: Boolean,
        default: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category' // tham chiếu đến schema của category
    }

}, { timestamps: true })

const Dish = mongoose.model("Dishes", dishSchema);
module.exports = Dish;