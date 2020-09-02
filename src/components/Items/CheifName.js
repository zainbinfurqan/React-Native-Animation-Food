import React, { } from 'react';
import { View, Image, Text } from 'react-native'
import { constants } from '../../config/constants';

function CheifName(props) {
    return (
        <View style={{ flexDirection: 'row', }}>
            <View style={{ flex: .1, justifyContent: 'center' }}>
                <Image style={[props.index % 2 === 0 ? constants.DarkThemeCss.icon : constants.LightThemeCss.icon,]}
                    source={props.index % 2 === 0 ? constants.FOOD_DATA_DARK_ICONS.chief_name_icon : constants.FOOD_DATA_LIGHT_ICONS.chief_name_icon} />
            </View>
            <View style={{ flex: .9, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={[props.index % 2 === 0 ? constants.DarkThemeCss.text : constants.LightThemeCss.text,]}>{constants.FOOD_DATA[props.index].chief_name}</Text>
            </View>
        </View>
    )
}

export default CheifName