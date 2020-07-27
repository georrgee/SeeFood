import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ headerTitle, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitleStyle}>{headerTitle}</Text>
            <FlatList 
                horizontal= {true}
                data={results}
                keyExtractor={(result) => result.id} 
                renderItem={({ item }) => { return <ResultsDetail result={item}/>; }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        marginBottom: 10
    },

    headerTitleStyle: {
        fontSize: 18, fontWeight: 'bold',
        color: 'black',
        marginLeft: 15, marginBottom: 5
    }

});

export default ResultsList;