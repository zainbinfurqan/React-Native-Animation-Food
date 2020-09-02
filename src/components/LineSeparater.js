import React, { } from 'react';
import { View } from 'react-native'
import { constants } from "../config/constants";

function LineSeparater(props) {
    return (
        <View style={[props.index % 2 === 0 ? constants.DarkThemeCss.halfRoundPicBorder : constants.LightThemeCss.halfRoundPicBorder,]}></View>
    )
}

export default LineSeparater