import styled from 'styled-components/native';

const ContainerView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    padding: 25px 10px 15px 10px;
    border-bottom-width: 2px;
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-bottom-style: solid;
`;

const BlockItemView = styled.View`
    justify-content: center;
    align-items: center;
    border-bottom-color: rgba(0, 0, 0,);
    border-bottom-style: solid;
`;

const TextHeader = styled.Text`
    font-size: 17px;
    margin-top: 10px;
    color: blue;
`;

export const HeaderStyle = {
    ContainerView,
    BlockItemView,
    TextHeader
}
