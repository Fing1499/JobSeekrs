const mongoose = require('mongoose');
const userSchema = require('./user');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    review: { type: String, },
    rating: { type: Number, enum: [1, 2, 3, 4, 5] }
});

const applicationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    companyName: { type: String, required: true },
    salary: { type: Number },
    position: { type: String, required: true },
    applicationStage: { type: String },
    success: { type: String, required: true, enum: ['Success', 'Rejected', 'Waiting'] },
    notes: { type: String },
    timeOfApplication: { type: Date, default: function() {return new Date().toLocaleDateString()} },
    reviews: [reviewSchema]
});




module.exports = mongoose.model('Application', applicationSchema);
