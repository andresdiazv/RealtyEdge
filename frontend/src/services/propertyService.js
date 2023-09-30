import axios from 'axios';

export const getFeaturedProperties = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/properties/featured');
        return response.data;
    } catch (error) {
        throw error; 
    }
}
