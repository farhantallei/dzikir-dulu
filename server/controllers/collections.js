import Collection from '../models/Collection.js';

export const getCollection = async (req, res) => {
    try {
        const collections = await Collection.find();

        res.status(200).json(collections);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
