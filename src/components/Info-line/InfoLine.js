import React from "react";
import { Text } from "react-native";

import BoxImage from '../../assets/box-solid.svg';
import LabelImage from '../../assets/label-67.svg';
import { InfoLineStyle } from "./InfoLine-style";

export const InfoLine = () => {

    const { SomeBlock, SomeBlockItem } = InfoLineStyle;

    return (
        <SomeBlock>
            <SomeBlockItem>
                <BoxImage fill="#434141" width={20} height={20} />
                <Text style={{ marginLeft: 7, fontSize: 12 }}>RRRR</Text>
            </SomeBlockItem>
            <SomeBlockItem>
                <LabelImage fill="#434141" width={20} height={20} />
                <Text style={{ marginLeft: 7, fontSize: 13, fontWeight: '600' }}>9</Text>
            </SomeBlockItem>
        </SomeBlock>
    );
}
