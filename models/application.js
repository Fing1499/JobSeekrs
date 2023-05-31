const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const reviewSchema = new Schema({

// })

const applicationSchema = new Schema({
    companyName: { type: String, required: true },
    salary: { type: Number },
    position: { type: String, required: true },
    applicationStage: { type: String },
    success: { type: String, required: true, enum: ['Success', 'Rejected', 'Waiting'] },
    notes: { type: String },
    timeOfApplication: { type: Date, default: function() {return new Date().getDay()} },
    // reviews: [reviewSchema]
});


module.exports = mongoose.model('Application', applicationSchema);