import React from 'react';
import { Text, Image, Alert } from 'react-native';
import styled from 'styled-components/native';

import ArrowImage from '../../assets/arrow-right-solid.svg';

export const VieComponent = ({ url, num, title, subtitle, setting, }) => {
    return (
        <VieStyle>
            <Image style={{ flex: 1 }} source={{ uri: url, width: 100, height: 100 }} />
            <VieStyleText style={{ flex: 2 }}>
                <Text>{title}</Text>
                <Text style={{ fontSize: 12 }}>{setting[0]}  {setting[1]}</Text>
                <Text style={{ color: '#c7bfbf', fontSize: 11 }}>{subtitle}</Text>
            </VieStyleText>
            <VieButton
                onPress={() => Alert.alert('Click', 'добавили товар')}
            >
                <Text style={{ color: '#fff' }}>{num}</Text>
            </VieButton>
            <ArrowImage style={{ marginLeft: 15 }} fill="#8c8989" width={15} height={15} />
        </VieStyle>
    )
}

const VieStyle = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 10px 10px 10px;
    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.2);
    border-style: solid;
`;
const VieButton = styled.TouchableOpacity`
    width: 85px;
    height: 19px;
    align-items: center;
    border-radius: 10px;
    background-color: #499359;
`;

const VieStyleText = styled.View`
    margin-left: 15px;
`;
