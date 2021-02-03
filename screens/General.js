import { useLinkProps } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import NewsItem from '../components/NewsItem';

const General = props => {

    const [data, setData] = useState(null)
    const [loading, isLoading] = useState(true)

   const url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
               setData(data)
            })
    }, []);  

const renderNewsItem = (itemData) => {
    return(
        <NewsItem 
        item = {itemData}
        action = {() => {props.navigation.navigate("GeneralDetail", {
            data: itemData.item
        })}}
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