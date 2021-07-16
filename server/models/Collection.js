import mongoose from 'mongoose';

const collectionSchema = mongoose.Schema({
    timesTotal: Number,
    source: String,
    title: [String],
    arabic: [String],
    size: String,
});

export const pagiCollection = mongoose.model('pagiCollection', collectionSchema, 'pagi');

export const petangCollection = mongoose.model('petangCollection', collectionSchema, 'petang');
