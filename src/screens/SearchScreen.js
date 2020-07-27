import React, { useState } from 'react'; //useState = hook
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    
    const [term, setTerm]                    = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'

        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style= {styles.viewBackgroundColor}>
        <SearchBar term={term} 
        onTermChange={setTerm}      // longer version: {newTerm => setTerm(newTerm)} 
        onTermSubmit={ () => searchAPI(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null } 
        <Text>We have found: {results.length}</Text>
        <ResultsList results={filterResultsByPrice('$')}   headerTitle="Cost Effective"/>
        <ResultsList results={filterResultsByPrice('$$')}  headerTitle="Bit Pricier"/>
        <ResultsList results={filterResultsByPrice('$$$')} headerTitle="Big Spender"/>
        
    </View>
)};

const styles = StyleSheet.create({
    viewBackgroundColor: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;


// Line 35 ({errorMessage ? <Text>....}): this removes that extra space.
// use a condition to show the text and if not show null (remove empty space)