import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import NewsItem from '../components/NewsItem';

const General = props => {

    const [data, setData] = useState(null)
    const [loading, isLoading] = useState(true)

   const url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    useEffect(() => {
        console.log("Working")
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
               setData(data)
            })
            console.log("Working Done")
    }, []);

    const showItemOnScreen = (title) => (
        <Text>{title}</Text>
    )

    const renderItem = ({ item }) => {

        let uri = `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`;

        fetch(uri)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            showItemOnScreen(data.title)
        })
        return(
            <Text>{item}</Text>
        )
    };
    

const renderNewsItem = (itemData) => {
    return(
        <NewsItem 
        item = {itemData}
         />
    );
}

    return(
        
            <View style={{flex: 1, padding: 10,}}>
            <FlatList 
                data={data}
                keyExtractor={(item) => String(item)}
                // renderItem={renderItem}
                renderItem = {renderNewsItem}
            />
            </View>
    )
}

export default General;