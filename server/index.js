import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import collectionRoutes from './routes/collections.js';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/collections', collectionRoutes);

const CONNECTION_URL = 'mongodb://farhantallei:419555444@dzikir-data-cluster-shard-00-00.mmgd6.mongodb.net:27017,dzikir-data-cluster-shard-00-01.mmgd6.mongodb.net:27017,dzikir-data-cluster-shard-00-02.mmgd6.mongodb.net:27017/dzikir-database?ssl=true&replicaSet=atlas-xsawxy-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
