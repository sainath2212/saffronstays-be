
# SaffronStays Backend

SaffronStay's backend project designed to provide room data and related details. It includes room occupancy forecasts, rate calculations, and an API to serve this information.

## Features

- Fetch room data based on room ID.
- Calculate future occupancy predictions for the next 5 months.
- Provide average, highest, and lowest rates for the next 30 days.
- Error handling for invalid room IDs or unexpected issues.

## Hosted Link

Access the hosted backend here: [SaffronStays Backend API](https://saffronstays-be-six.vercel.app/)

## Local Development

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Project Structure

```
saffronstays/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── roomController.js
│   ├── data/
│   │   └── roomData.json
│   └── routes/
│       └── roomRoutes.js
├── index.js
├── package-lock.json
├── package.json
└── vercel.json
```

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/saffronstays.git
   cd saffronstays
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

4. Access the API at [http://localhost:3000](http://localhost:3000).

### API Endpoints

#### Get Room Data

- **Endpoint**: `/api/rooms/:roomId`
- **Method**: GET
- **Description**: Fetch room data by room ID.

Example Request:

```bash
GET http://localhost:3000/api/rooms/101
```

Example Response:

```json
{
    "roomId": "101",
    "next5Months": [
        { "month": "January", "occupancy": 85 },
        { "month": "February", "occupancy": 78 },
        { "month": "March", "occupancy": 92 },
        { "month": "April", "occupancy": 88 },
        { "month": "May", "occupancy": 95 }
    ],
    "rates": {
        "average": "90.00",
        "highest": 95,
        "lowest": 85
    }
}
```

#### Default Welcome Message

- **Endpoint**: `/`
- **Method**: GET
- **Description**: Returns a welcome message.

Example Request:

```bash
GET http://localhost:3000/
```

Example Response:

```json
{
    "message": "Welcome to SaffronStays"
}
```

### Error Handling

- **400**: Invalid room ID format.
- **404**: Room not found.
- **500**: Unexpected server error.

## Deployment

This project is deployed using [Vercel](https://vercel.com/). 

Deployed URL: [https://saffronstays-be-six.vercel.app/](https://saffronstays-be-six.vercel.app/)

---
