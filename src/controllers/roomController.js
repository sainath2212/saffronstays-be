const roomData = require('../data/roomData.json');

exports.getRoomData = (req, res) => {
    const roomId = req.params.roomId;
    if (isNaN(roomId)) {
        return res.status(400).json({ error: 'Invalid room ID format. Please provide a numeric room ID.' });
    }

    try {
        const roomInfo = fetchRoomData(roomId);
        res.json(roomInfo);
    } catch (error) {
        if (error.message.includes('Room with ID')) {
            return res.status(404).json({ error: error.message });
        }

        res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
    }
};


function fetchRoomData(roomId) {
    const room = roomData.find(r => r.id === roomId);

    if (!room) {
        throw new Error(`Room with ID ${roomId} not found.`);
    }

    const next5Months = Array.from({ length: 5 }, (value, i) => {
        const currentDate = new Date();
        const futureMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() + i));

        return {
            month: futureMonthDate.toLocaleString('default', { month: 'long' }),
            occupancy: Math.floor(Math.random() * 100) + 1
        };
    });

    const next30DaysRates = room.rates.slice(0, 30);

    if (next30DaysRates.length === 0) {
        return {
            roomId,
            next5Months,
            rates: {
                average: '0.00',
                highest: 0,
                lowest: 0
            }
        };
    }

    const avgRate = (next30DaysRates.reduce((sum, rate) => sum + rate, 0) / next30DaysRates.length).toFixed(2);
    const highestRate = Math.max(...next30DaysRates);
    const lowestRate = Math.min(...next30DaysRates);

    return {
        roomId,
        next5Months,
        rates: {
            average: avgRate,
            highest: highestRate,
            lowest: lowestRate
        }
    };
}
