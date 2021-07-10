import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb://farhantallei:419555444Sifrhn@sakudzikr-cluster-0-shard-00-00.mmgd6.mongodb.net:27017,sakudzikr-cluster-0-shard-00-01.mmgd6.mongodb.net:27017,sakudzikr-cluster-0-shard-00-02.mmgd6.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-irhbzc-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
