import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const GeneralDetail = ({ route }) => {

  const item = route.params.data;

    const [data, setData] = useState(null);

    useEffect(() => {
        let uri = `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`;

        fetch(uri)
            .then(response => response.json())
            .then(data => {
                setData(data.url)
            })

    }, []);

    return (
        <View style={{ flex: 1 }}>
           <WebView
                source={{
                    
                    uri: data
                }}

                renderError={() => alert('Erreur', 'Internet non disponible')}
            
            /> 
          
        </View>
    )
}

export default GeneralDetail;