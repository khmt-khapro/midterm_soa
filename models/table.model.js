const mongoose = require("mongoose")

const tableSchema = mongoose.Schema({
    name: { type: String, required: true },
    isUsed: {
        type: Boolean,
        default: false
    },
    isActivated: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const Table = mongoose.model("Tables", tableSchema);
module.exports = Table;