import { pagiCollection, petangCollection } from '../models/Collection.js';

export const getPagiCollections = async (req, res) => {
    try {
        const collections = await pagiCollection.find();

        res.status(200).json(collections);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPetangCollections = async (req, res) => {
    try {
        const collections = await petangCollection.find();

        res.status(200).json(collections);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
