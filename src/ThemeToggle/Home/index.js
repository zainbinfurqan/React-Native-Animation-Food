import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../config/constants'
import themeAction from '../../redux/actions/setting/setting'

function ThemeToggle(props) {

    const store = useSelector(store => store);
    const [isEnabled, setIsEnabled] = useState(store.setting.themeToggle);
    const dispatch = useDispatch()

    let theme = {
        backgroundColor: store.setting.themeToggle ? constants.darkTheme.backgroundColor : constants.lightTheme.backgroundColor,
        text: store.setting.themeToggle ? constants.darkTheme.textColor : constants.lightTheme.textColor,
    }


    function onToggleSwitch() {
        setIsEnabled(!store.setting.themeToggle)
        dispatch(themeAction.SwitchTheme(!store.setting.themeToggle))
    }

    return (
        <View style={{ borderWidth: 4, flex: 1, backgroundColor: theme.backgroundColor }}>
            <Switch
                trackColor={{ false: "black", true: "white" }}
                thumbColor={isEnabled ? "black" : "white"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onToggleSwitch}
                value={isEnabled}
            />
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ fontFamily: 'SamsungSharpSans-Bold', color: theme.text }}>Hello Jee</Text>
            </View>
        </View>
    );
}

export default ThemeToggle;
