import React, { useRef, useEffect, useState, useCallback } from "react";
import { View, Text, SafeAreaView, Animated, Image, Easing, Dimensions, Slider, StyleSheet } from "react-native";
import { FlingGestureHandler, Directions, State } from "react-native-gesture-handler";
import { Transition, Transitioning, color } from 'react-native-reanimated'
import posed, { Transition as PosedTransition } from 'react-native-pose'

import CheifName from '../components/Items/CheifName'
import Recipe from '../components/Items/Recipe'
import Description from '../components/Items/Description'
import Ingredients from '../components/Items/Ingredients'
import PreparationTime from '../components/Items/PreparationTime'
import LineSeparater from '../components/LineSeparater'


import { constants } from "../config/constants";
const { height, width } = Dimensions.get('window')
const DURATION = 700

const transition = (
    <Transition.Together>
        <Transition.Out type='slide-bottom' durationMs={DURATION * 0.2} interpolation='easeIn' />
        <Transition.Change />
        <Transition.In type='slide-bottom' durationMs={DURATION} interpolation='easeOut' />
    </Transition.Together>
)

function AnimationView(props) {

    const [index, setIndex] = useState(0)
    const activeIndex = useRef(new Animated.Value(0)).current
    const animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animation, {
            toValue: activeIndex,
            duration: DURATION * 0.3,
            useNativeDriver: true
        }).start()
    })



    function handleConnectivityChange(value) {
    }

    const setActiveIndex = React.useCallback((index) => {
        activeIndex.setValue(index)
        ref.current.animateNextTransition()
        setIndex(index)
    });

    const translateY =
        animation.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [height, 0, -height]
        })

    const ref = React.useRef()

    const PosedView = posed.View({
        enter: { opacity: 1, rotate: '0deg' },
        exit: { opacity: 0, rotate: '180deg' }
    })

    return (
        <FlingGestureHandler
            key="up"
            direction={Directions.UP} onHandlerStateChange={ev => {
                if (ev.nativeEvent.state === State.END) {
                    if (index === constants.FOOD_DATA.length - 1) {
                        return;
                    }
                    setActiveIndex(index + 1)
                }
            }}>
            <FlingGestureHandler
                key="down " direction={Directions.DOWN} onHandlerStateChange={ev => {
                    if (ev.nativeEvent.state === State.END) {
                        if (index === 0) {
                            return;
                        }
                        setActiveIndex(index - 1)
                    }
                }}>
                <SafeAreaView style={{ flex: 1, }} >
                    <Animated.View style={[{
                        position: 'absolute',
                        width: '100%',
                        height: height * constants.FOOD_DATA.length,
                        transform: [{ translateY: translateY }],
                    }]}>
                        {constants.FOOD_DATA.map((_, i) => {
                            return (
                                <Transitioning.View
                                    ref={ref}
                                    transition={transition}
                                    key={i} style={{ height, backgroundColor: i % 2 === 0 ? '#07344B' : '#D9EDF7' }}>
                                </Transitioning.View>
                            )
                        })}

                    </Animated.View>
                    <PosedTransition>
                        {index % 2 === 0 ?
                            <PosedView
                                key='image0'
                                style={[index % 2 === 0 ? DarkTheme.picMain : LightTheme.picMain,]}>
                                <LineSeparater index={index} />
                                <Image style={{ borderWidth: 3, height: 100, width: 100, alignSelf: 'center', borderRadius: 100, }} source={constants.FOOD_DATA[index].food_image} />
                            </PosedView>
                            :
                            <PosedView
                                key='image1'
                                style={[{ borderWidth: 5, marginTop: 10, position: 'absolute', justifyContent: 'center', alignSelf: 'center' }, index % 2 === 0 ? DarkTheme.picMain : LightTheme.picMain]}>
                                <LineSeparater index={index} />
                                <Image style={{ borderWidth: 3, height: 100, width: 100, borderRadius: 100, }} source={constants.FOOD_DATA[index].food_image} />
                            </PosedView>}

                    </PosedTransition>

                    <View style={{}, [index % 2 === 0 ? DarkTheme.lineSeperater : LightTheme.lineSeperater]}></View>

                    <View style={{}}>
                        <CheifName index={index} />
                        <Recipe index={index} />
                        <PreparationTime index={index} />
                        <Ingredients index={index} />
                        <Description index={index} />
                    </View>

                </SafeAreaView>
            </FlingGestureHandler>
        </FlingGestureHandler>
    )
}

const LightTheme = {
    lineSeperater: {
        borderBottomWidth: 0.34,
        marginRight: 20,
        borderColor: '#075D86',
        marginLeft: 20,
        shadowColor: "#000",
        marginTop: 140,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,

        elevation: 1,
    },
    picMain: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 100,
        padding: 10,
        borderColor: '#07344B',
        marginTop: 10,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#07344B',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
    icon: { height: 35, width: 35, alignSelf: 'center' },
    text: {
        color: 'black',
        fontSize: 35,
        margin: 10,
        fontFamily: 'YellowrabbitPersonaluse-qZYyd'
    },
    textIngridents: {
        fontSize: 20,
        alignSelf: 'flex-start',
        fontFamily: 'YellowrabbitPersonaluse-qZYyd',
        color: 'black',
        marginTop: 10,
        borderWidth: 0.34,
        paddingLeft: 10, paddingRight: 10, marginRight: 2, borderRadius: 25
    },
    line: { borderBottomWidth: 0.30, marginRight: 10, marginLeft: 10, borderColor: '#075D86' },

}

const DarkTheme = {
    lineSeperater: {
        borderBottomWidth: 0.34,
        marginTop: 140,
        marginRight: 20,
        borderColor: '#D9EDF7',
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,

        elevation: 2,
    },
    picMain: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#D9EDF7',
        marginTop: 10,
        borderRadius: 100,
        padding: 10,
        backgroundColor: '#D9EDF7',
        position: 'absolute',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon: { height: 35, width: 35, alignSelf: 'center' },
    text: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'YellowrabbitPersonaluse-qZYyd',
        margin: 10,
    },
    textIngridents: {
        fontSize: 20,
        alignSelf: 'flex-start',
        fontFamily: 'YellowrabbitPersonaluse-qZYyd',
        color: 'white',
        borderColor: 'white',
        marginTop: 10,
        borderWidth: 0.34,
        paddingLeft: 10, paddingRight: 10, marginRight: 2, borderRadius: 25

    },
    line: { borderBottomWidth: 0.30, marginRight: 10, marginLeft: 10, borderColor: '#D9EDF7' },

}

export default AnimationView;