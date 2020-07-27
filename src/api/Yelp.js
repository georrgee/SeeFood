import axios from 'axios';


export default axios.create({ // code reuse
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer OxGYuxiwDchUiGIbNj7IVnmvXEfGZrbbVyu9sPgig8Ax8FTfkVZcl4hlbtixtO-L7DlCGXgb-hiEdng4420ZNqOpEFaoc6ojVRSQsvkRvmPUk_dyGBOsT0dtsT0GX3Yx'
    }
});

// yelp.get('/search')