import axios from 'axios'

export default {
    // Gets API response
    getResponse : {
      response: axios(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KEY}`)

    }
  };




