import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed 100 characters']
    }
})

export default mongoose.model.Room || mongoose.model('Room', roomSchema);