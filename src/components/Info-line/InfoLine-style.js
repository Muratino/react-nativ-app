import styled from "styled-components/native";

const SomeBlock = styled.View`
padding: 10px 15px 10px 15px;
background-color: #e5e5e5;
flex-direction: row;
justify-content: space-between;
`;
const SomeBlockItem = styled.View`
flex-direction: row;
align-items: center;
`;

export const InfoLineStyle = {
    SomeBlock,
    SomeBlockItem
}