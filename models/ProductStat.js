const mongoose = require('mongoose');

const ProductStatSchema = new mongoose.Schema({
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number,
        },
    ],
    dailyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number,
    },
}, { timestamps: true, });

const User = mongoose.model('ProductStat', ProductStatSchema);
export default Product;