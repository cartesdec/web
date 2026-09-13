# WebInt Application

A modern web application with a Python Flask backend and interactive frontend.

## Project Structure

```
web/
├── backend/
│   ├── app.py              # Main Flask application
│   ├── requirements.txt     # Python dependencies
│   └── .env.example         # Environment variables template
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Styling
│   └── script.js           # Frontend JavaScript
└── README.md               # This file
```

## Backend Setup

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (optional but recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

5. Run the Flask application:
```bash
python app.py
```

The backend will start at `http://localhost:5000`

## Frontend Setup

The frontend is a static HTML/CSS/JavaScript application.

### Running the Frontend

1. You can serve the frontend files using any web server. Here are a few options:

**Option 1: Python's built-in server**
```bash
cd frontend
python -m http.server 8000
```

**Option 2: Using Node.js http-server**
```bash
cd frontend
npx http-server
```

**Option 3: Open directly in browser**
Just open `frontend/index.html` directly in your browser (for development)

Access the frontend at `http://localhost:8000`

## API Endpoints

### Health Check
- **Endpoint:** `GET /api/health`
- **Response:**
```json
{
  "status": "healthy",
  "message": "Backend is running"
}
```

### Hello Endpoint
- **Endpoint:** `GET /api/hello?name=YourName`
- **Response:**
```json
{
  "message": "Hello, YourName!"
}
```

### Echo Service
- **Endpoint:** `POST /api/echo`
- **Body:**
```json
{
  "data": "your data here"
}
```
- **Response:**
```json
{
  "received": {...},
  "message": "Data received successfully"
}
```

## Features

- ✅ Python Flask backend with RESTful API
- ✅ CORS enabled for cross-origin requests
- ✅ Modern, responsive frontend
- ✅ Multiple API endpoints for testing
- ✅ Error handling and validation
- ✅ Environment configuration support

## Environment Variables

Create a `.env` file in the `backend/` directory:

```env
FLASK_ENV=development
FLASK_DEBUG=True
FLASK_HOST=0.0.0.0
FLASK_PORT=5000
```

## Development

### Adding New Backend Routes

Edit `backend/app.py` and add new route decorators:

```python
@app.route('/api/your-endpoint', methods=['GET', 'POST'])
def your_function():
    return jsonify({'result': 'your data'}), 200
```

### Adding New Frontend Components

Edit `frontend/index.html` to add new sections, update `frontend/styles.css` for styling, and add functions in `frontend/script.js` to handle interactions.

## Troubleshooting

### CORS Errors
If you see CORS errors, ensure:
1. Backend has CORS enabled (it does by default)
2. Frontend is calling the correct API URL
3. Frontend and backend are running on different ports

### Port Already in Use
If port 5000 is already in use, change it in `.env`:
```env
FLASK_PORT=5001
```

And update the API URL in `frontend/script.js`:
```javascript
const API_BASE_URL = 'http://localhost:5001/api';
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!
