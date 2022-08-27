import styled from 'styled-components/native';

const ContentBlock = styled.View`
flex: 1;
background-color: #fff;
`;

const ContentTitle = styled.View`
padding: 10px 15px 10px 15px;
flex-direction: row;
justify-content: space-around;
border-bottom-width: 1px;
border-color: rgba(0, 0, 0, 0.2);
border-style: solid;
`;

const TextTitle = styled.Text`
font-size: 15px;
color: #b2b2b5;
`;

const ContentItem = styled.View`
padding: 10px 8px 10px 8px;
flex: 1;
`;

const ContentButton = styled.View`
padding: 10px 8px 10px 8px;
align-items: center;
justify-content: center;
border-width: 1px;
border-color: rgba(0, 0, 0, 0.3);
border-style: solid;
`;

const ContentButtonItem = styled.TouchableOpacity`
width: 90%;
height: 50px;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: #fff;
border-width: 2px;
border-color: #92AEC5;
border-style: solid;
`;

const ContentButtonText = styled.Text`
color: #92AEC5;
font-size: 17px;
font-weight: 500;
`;

export const ContentStyle = {
    ContentTitle,
    ContentBlock,
    ContentButton,
    TextTitle,
    ContentItem,
    ContentButton,
    ContentButtonItem,
    ContentButtonText,
}