import React from 'react';
import { FlatList, TouchableOpacity, Alert } from 'react-native';

import { VieComponent } from '../Stupid-components/Vie-component';
import { ContentStyle } from './Content-style';

const itemData = [
    { id: 1, url: "https://beintrendy.net/upload/thumb/images/jn/jnzezqpjfda_470x0.jpg", title: 'Cg09238', setting: ['White', 'XS'], subtitle: 'lsdfosodfs MAN 30+', num: '3' },
    { id: 2, url: "https://yamaiku.ru/upload/thumb/images/at/at5vtekj50b_470x0.jpg", title: 'Cfksds', setting: ['White', 'XXS'], subtitle: '20 0 ss MAN 30+', num: '3' },
    { id: 3, url: "https://beintrendy.net/upload/thumb/images/jn/jnzezqpjfda_470x0.jpg", title: '098ssa', setting: ['White', 'S'], subtitle: 'l30 dsss red MAN 30+', num: '3' },
    { id: 4, url: "https://yamaiku.ru/upload/thumb/images/1y/1yk1w3wjb93_320x0.jpg", title: 'Cg09238', setting: ['White', 'XS'], subtitle: 'lsdfosodfs MAN 30+', num: '3' },
    { id: 5, url: "https://ae04.alicdn.com/kf/Sb0e75dc26a344cdf8d931e58371f2c40d.jpg_350x350.jpg", title: 'Cfksds', setting: ['White', 'XXS'], subtitle: '20 0 ss MAN 30+', num: '3' },
    { id: 6, url: "https://beintrendy.net/upload/thumb/images/jn/jnzezqpjfda_470x0.jpg", title: '098ssa', setting: ['White', 'S'], subtitle: 'l30 dsss red MAN 30+', num: '3' },
    { id: 7, url: "https://yamaiku.ru/upload/thumb/images/1y/1yk1w3wjb93_320x0.jpg", title: 'Cg09238', setting: ['White', 'XS'], subtitle: 'lsdfosodfs MAN 30+', num: '3' },
    { id: 8, url: "https://beintrendy.net/upload/thumb/images/jn/jnzezqpjfda_470x0.jpg", title: 'Cfksds', setting: ['White', 'XXS'], subtitle: '20 0 ss MAN 30+', num: '3' },
    { id: 9, url: "https://beintrendy.net/upload/thumb/images/jn/jnzezqpjfda_470x0.jpg", title: '098ssa', setting: ['White', 'S'], subtitle: 'l30 dsss red MAN 30+', num: '3' },
]

export const Content = () => {

    const { ContentBlock, ContentButton, TextTitle, ContentItem, ContentButtonItem, ContentButtonText, ContentTitle } = ContentStyle;

    return (
        <ContentBlock>
            <ContentTitle >
                <TextTitle>ARTICLE</TextTitle>
                <TextTitle>ACT</TextTitle>
            </ContentTitle>
            <ContentItem>
                <FlatList
                    data={itemData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { Alert.alert('Some text', 'text.....') }}>
                            <VieComponent
                                key={item.id}
                                {...item}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </ContentItem>
            <ContentButton>
                <ContentButtonItem
                    onPress={() => { Alert.alert('Pull...', 'text.....') }}
                >
                    <ContentButtonText > Pull the trigger to start reading </ContentButtonText>
                </ContentButtonItem>
            </ContentButton>
        </ContentBlock>
    );
}