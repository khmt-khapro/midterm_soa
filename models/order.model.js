const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    table: {
        type: Schema.Types.ObjectId,
        ref: 'Table', // tham chiếu đến schema của Table
        required: true
    },
    dishes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Dish', // tham chiếu đến schema Dish
            required: true,
            quantity: {
                type: Number,
                default: 1
            }

        }
    ],
    status: {
        type: String,
        default: 0,  // 0: unpaid, 1: paid
    },
    note: String,
    subTotal: Number,
    tax: {
        type: Number,
        default: 0.1
    },
    total: Number   // total price
}, { timestamps: true })

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;