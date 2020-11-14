import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen =()=>{
    const [term,setTerm]= useState('')
    const [searchApi,results,errorMessage]= useResults();
   
    const filterResultByPrice=(price)=>{
        return results.filter(result=>{return result.price===price;});
    };
    return(
        <View style>
            <SearchBar
            term ={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <Text>We have found {results.length} results</Text>
            <ResultList results={filterResultByPrice('$')} title='cost Effective'/>
            <ResultList results={filterResultByPrice('$$')} title='Bit Pricier'/>
            <ResultList results={filterResultByPrice('$$$')} title='Big spender'/>
        </View>
    );
};

const styles= StyleSheet.create({});

export default SearchScreen;