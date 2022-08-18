import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <WebView source={{ uri: 'http://192.168.1.6/' }} />
            </SafeAreaView>
        </>
    );
};

export default App;