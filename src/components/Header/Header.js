import React from "react";
import {
    Text,
    View,
} from 'react-native';

import Bluetooth from "../../assets/bluetooth_9.svg";
import Signal from '../../assets/signal-10.svg';
import Clouds from '../../assets/cloud-arrow-up-solid.svg';
import { HeaderStyle } from './Header-style';

export const Header = () => {

    const { ContainerView, BlockItemView, TextHeader } = HeaderStyle;

    return (
        <ContainerView>
            <BlockItemView>
                <View style={{ flexDirection: 'row' }}>
                    <Bluetooth fill='#000' width={35} height={35} />
                    <Text style={{ fontSize: 23, marginLeft: 5, color: '#000', fontWeight: "500" }} >100%</Text>
                </View>
                <TextHeader>Cancel</TextHeader>
            </BlockItemView>
            <BlockItemView >
                <Signal fill='black' width={35} height={35} />
                <TextHeader style={{ color: '#000' }} >Articles in Carton</TextHeader>
            </BlockItemView>
            <BlockItemView>
                <Clouds fill='black' width={35} height={35} />
                <TextHeader>Confirm</TextHeader>
            </BlockItemView>
        </ContainerView>
    );
}