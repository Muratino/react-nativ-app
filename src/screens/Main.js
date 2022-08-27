import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { Content } from '../components/Content/Content';
import { InfoLine } from '../components/Info-line/InfoLine';

export const Main = () => {
    return (
        <View style={{ flex: 1 }} >
            <Header />
            <InfoLine />
            <Content />
        </View>
    );
}

