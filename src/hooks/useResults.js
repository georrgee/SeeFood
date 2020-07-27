import { useEffect, useState } from 'react';
import yelp from '../api/Yelp';

export default () => {

    const [results, setResults]           = useState([]); // anytime we use setter, it updates a piece of state 
    const [errorMessage, setErrorMessage] = useState('')  // this is a state variable

    // whenever making an api or any kinf of networking request, remember its a asynchronous operation
    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50, // this is saying ('/search?limit=50')
                    term: searchTerm, 
                    location: 'san jose'
                }
        });
        setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong! Try again later...')
        }
    };

    useEffect(() => {
        searchAPI('pasta');
    }, [])

    return [searchAPI, results, errorMessage];
};