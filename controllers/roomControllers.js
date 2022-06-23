import Room from "../models/room"

const allRooms = async (req, res) => {
    try {
        const rooms = await Room.find()
        res.status(200).json({
            success: true,
            rooms
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

// create new room => /api/rooms
const newRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);

        res.status(200).json({
            success: true,
            room
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

export {
    allRooms,
    newRoom
}