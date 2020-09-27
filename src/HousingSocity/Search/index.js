import React from 'react';

import { Dimensions, Text, Animated } from 'react-native';
import { Container, Input, BoxButtonSearch, SearchIcon } from './styles';

export default function Search() {
    const animation = new Animated.Value(60);
    const { width } = Dimensions.get('window');

    function onSearch() {
        console.log("onSearch")
        Animated.spring(animation, {
            toValue: width * 0.7,
            useNativeDriver: false,
        }).start();
    }

    return (
        <Container style={{ width: animation }}>
            <Input autoFocus />
            <BoxButtonSearch onPress={onSearch}>
                {/* <SearchIcon /> */}
                <Text>s</Text>
            </BoxButtonSearch>
        </Container>
    );
}
// import React from 'react';

// import { Dimensions, TouchableOpacity, TextInput, Animated, Text } from 'react-native';
// // import { Container, Input, BoxButtonSearch, SearchIcon } from './styles';

// export default function Search() {
//     const animation = new Animated.Value(60);
//     const { width } = Dimensions.get('window');

//     function onSearch() {
//         console.log("onSearch")
//         Animated.spring(animation, {
//             toValue: width * 0.7,
//             useNativeDriver: false,
//         }).start();
//     }

//     return (
//         <Animated.View style={[{
//             width: 60,
//             borderWidth: 5,
//             height: 60,
//             backgroundColor: '#333',
//             borderRadius: 30
//         }, { width: animation }]}>
//             <TextInput style={{
//                 marginRight: 60,
//                 marginLeft: 20,
//                 color: '#999'
//             }} autoFocus />
//             <TouchableOpacity activeOpacity={1} style={{
//                 width: 60,
//                 height: 60,
//                 backgroundColor: '#2980b9',
//                 position: 'absolute',
//                 right: 0,
//                 borderRadius: 30,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }} onPress={onSearch}>
//                 {/* <SearchIcon /> */}
//                 {/* <Text>src</Text> */}
//             </TouchableOpacity>
//         </Animated.View>
//     );
// }