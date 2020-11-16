import React,{useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    
const [results,setResults]=useState([]);
const [errorMessage,setErrorMessage]=useState('');

const searchApi=async searchTerm=>{
    console.log('Hi avrar propsThere');
   try {
    const response = await yelp.get('/search',{
        params:{
            limit:50,
            term:searchTerm,
            location: 'san jose'
        }
    });
    console.log("Result is");
    console.log(response);
    setResults(response.data.businesses);

   } catch (error) {
       console.log("Error is here::");
       console.log(error);
       setErrorMessage('Something went wrong');
   } 
};

useEffect(()=>{
    console.log("calling inside useEffect");
    searchApi('pasta');
},[]);

return [searchApi,results,errorMessage];
};
