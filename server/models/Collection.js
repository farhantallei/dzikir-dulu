import mongoose from 'mongoose';

const collectionSchema = mongoose.Schema({
    timesTotal: Number,
    source: String,
    title: [String],
    arabic: [String],
});

const Collection = mongoose.model('Collection', collectionSchema, 'dzikir');

export default Collection;