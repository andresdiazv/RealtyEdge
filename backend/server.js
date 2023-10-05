const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
require('dotenv').config();


const properties = [
    {
      id: 1,
      address: '6772 SW 77th Ter, South Miami, FL 33143',
      price: '2950000',
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2406,
    },
    {
      id: 2,
      address: '5991 SW 85th St, South Miami, FL 33143',
      price: '495000',
      bedrooms: 5,
      bathrooms: 7,
      squareFootage: 4819,
    },
    
  ];  

app.use(cors());
app.use(express.json()); 

app.get('/api/properties/featured', (req, res) => {
  res.json(properties);
});

app.get('/api/properties/:id', (req, res) => {
    const { id } = req.params;
    const property = properties.find(p => p.id === Number(id));
    if(!property){
        return res.status(404).send('Property with the given ID was not found');
    }
    res.json(property);
});

app.get('/api/google-maps-key', (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
