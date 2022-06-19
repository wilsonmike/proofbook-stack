import mongoose from 'mongoose';

const dbConnect = () => {
    if (mongoose.connection.readyState > 1) {
        return
    }

    mongoose.connect(process.env.DB_LOCAL_URI).then(() => { console.log('...this is working') })
}

export default dbConnect