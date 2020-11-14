import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
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
        < >
            <SearchBar
            term ={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <ScrollView>
            <ResultList results={filterResultByPrice('$')} title='cost Effective'/>
            <ResultList results={filterResultByPrice('$$')} title='Bit Pricier'/>
            <ResultList results={filterResultByPrice('$$$')} title='Big spender'/>
            </ScrollView>
        </>
    );
};

const styles= StyleSheet.create({});

export default SearchScreen;