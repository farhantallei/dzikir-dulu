import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import collectionRoutes from './routes/collections.js';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/collections', collectionRoutes);

const CONNECTION_URL = 'mongodb+srv://farhantallei:419555444Sifrhn@dzikir-data-cluster.mmgd6.mongodb.net/dzikir-database?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
