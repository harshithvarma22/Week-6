const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    item_Name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    nutritional_Information: { type: String, required: true },
    serving_size: { type: String, required: true },  // Changed to String as per your input
    allergens: { type: String, default: "None" },  // Set default value if not provided
    ingredients: { type: String, required: true },
    preparation_methods: { type: String, required: true },
    certifications: { type: String, required: true },
    countryOfOrigin: { type: String, required: true },
    manufacturer: { type: String, required: true },
    dietaryRestrictions: { type: String, default: "None" },  // Set default value if not provided
    healthBenefits: { type: String, required: true },
    bestPractices: { type: String, required: true }
});

const foodModel = mongoose.model('FoodModel', foodSchema);

module.exports = foodModel;
