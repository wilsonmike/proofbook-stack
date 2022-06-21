import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed 100 characters']
    },
    price: {
        type: number,
        required: [true, 'Please enter a room price'],
        maxLength: [4, 'Room name cannot exceed 100 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter a room description'],
    },
    address: {
        type: String,
        required: [true, 'Please enter room address'],
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room guest capacity'],
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds'],
    },
    internet: {
        type: Boolean,
        default: true,
    },
    breakfast: {
        type: Boolean,
        default: true,
    },
    airConditioned: {
        type: Boolean,
        default: true,
    },
    petsAllowed: {
        type: Boolean,
        default: false,
    },
    roomCleaning: {
        type: Boolean,
        default: true,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter room category'],
        enum: {
            values: [
                'King',
                'Single',
                'Twin'
            ],
            message: 'Please select correct category for room'
        }
    }

})

export default mongoose.model.Room || mongoose.model('Room', roomSchema);