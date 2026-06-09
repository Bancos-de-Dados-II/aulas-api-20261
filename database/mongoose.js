import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

await mongoose.connect(process.env.MONGO_URL);
console.log('Conectado ao MongoDB');

mongoose.connection.on('error', (err) => {
    console.error('Erro de conexão com MongoDB:', err);
});

export default mongoose;