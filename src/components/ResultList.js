import React from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultList =({title,results})=>{
    return(
        <View style={styles.container}>
        <Text style ={styles.title}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result=>result.id}
        renderItem={
            ({item})=>
        {
            return <ResultsDetail result={item}/>;
        }
                }
        />
        </View>
    );
};

const styles= StyleSheet.create({
    title:{
       fontSize:18,
       fontWeight:'bold',
       marginBottom:15,
       marginBottom:5
    },
    container:{
        marginBottom:10
    }
});

export default ResultList;