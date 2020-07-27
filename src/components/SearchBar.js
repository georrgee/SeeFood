import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
    <View style={ styles.backgroundStyle }>
        <Feather name="search" style={styles.iconStyle}/> 
        <TextInput
        autoCapitalize= 'none'
        autoCorrect= {false}
        style={styles.inputStyle } 
        placeholder="Search"
        value= {term}
        onChangeText= {onTermChange} // anytime that user changes text, onTermChange is called
        onEndEditing= {onTermSubmit} // hey call this function (cleaner way)
        /> 
    </View>
    );
};
const styles = StyleSheet.create({
    
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18 // default is 14
    }, 
    
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
