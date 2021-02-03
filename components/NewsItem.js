import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NewsItem = props => {

    const [data, setData] = useState('');

    useEffect(() => {
        let uri = `https://hacker-news.firebaseio.com/v0/item/${props.item.item}.json?print=pretty`;

        fetch(uri)
            .then(response => response.json())
            .then(data => {
                setData(data)
            });

    }, []);


    return (
        <TouchableOpacity onPress={props.action}>
            <View style={styles.container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.type}>{data.type}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 20,
        height: 150,
        width: '100%',
        backgroundColor: 'orange',
        padding: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    type: {
        fontSize: 16,
    }
});

export default NewsItem;