const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    companyName: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5] }
});

const applicationSchema = new Schema({
    companyName: { type: String, required: true },
    salary: { type: Number },
    position: { type: String, required: true },
    applicationStage: { type: String },
    success: { type: String, required: true, enum: ['Success', 'Rejected', 'Waiting'] },
    notes: { type: String },
    timeOfApplication: { type: Date, default: function() {return new Date().toLocaleDateString()} },
    reviews: [reviewSchema]
});

// applicationSchema.add({ reviews: [reviewSchema] });

module.exports = mongoose.model('Application', applicationSchema);