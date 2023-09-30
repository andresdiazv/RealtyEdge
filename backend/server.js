const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // You can use any port that suits your needs

// Dummy data, replace with your actual data fetching logic
const properties = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      address: '1234 Street Name, City, State, Zip',
      price: '300,000',
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 1500,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      address: '5678 Street Name, City, State, Zip',
      price: '150,000',
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 700,
    },
    
  ];  

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable JSON parsing

// Define an endpoint to get featured properties
app.get('/api/properties/featured', (req, res) => {
  // Replace this with your actual logic to fetch featured properties.
  res.json(properties);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
