import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsItem = props => {

    const [data, setData] = useState('');

    useEffect(() => {
        console.log("this is the item")
        console.log(props.item.item)
        let uri = `https://hacker-news.firebaseio.com/v0/item/${props.item.item}.json?print=pretty`;

        fetch(uri)
        .then(response => response.json())
        .then(data => {
            console.log("This is the Output of Data")
            console.log(data)
            setData(data)
        })

    }, []);


    return (
        <View style={styles.container}>
            <Text>{data.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 20,
        height: 300,
        width: '100%',
        backgroundColor: 'orange',
        padding: 20,
    }
});

export default NewsItem;