

export const constants = {
    FOOD_DATA_DARK_ICONS: {
        recipe_icon: require('../assets/cookiesligt.png'),
        preparing_time_icon: require('../assets/clocklight.png'),
        ingredients_icon: require('../assets/ingredientslight.png'),
        chief_name_icon: require('../assets/chieflight.png'),
        description_icon: require('../assets/notelight.png'),
    },
    FOOD_DATA_LIGHT_ICONS: {
        recipe_icon: require('../assets/cookies.png'),
        preparing_time_icon: require('../assets/clock.png'),
        ingredients_icon: require('../assets/ingredients.png'),
        chief_name_icon: require('../assets/chief.png'),
        description_icon: require('../assets/note.png'),
    },
    FOOD_DATA: [
        {
            id: 1,
            recipe_name: 'Chiken Kabab',
            preparing_time: '20 min',
            food_image: require('../assets/dish-5.png'),
            ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
            chief_name: 'Zain',
            description: 'Dish will be delishes and eat it with raita'
        },
        {
            id: 2,
            recipe_name: 'Chiken Kabab',
            preparing_time: '20 min',
            food_image: require('../assets/dish-4.png'),
            ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
            chief_name: 'Zain',
            description: 'Dish will be delishes and eat it with raita'
        },
        {
            id: 3,
            recipe_name: 'Chiken Kabab',
            preparing_time: '20 min',
            food_image: require('../assets/dish-3.png'),
            ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
            chief_name: 'Zain',
            description: 'Dish will be delishes and eat it with raita'
        },
        {
            id: 4,
            recipe_name: 'Chiken Kabab',
            preparing_time: '20 min',
            food_image: require('../assets/dish-2.png'),
            ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
            chief_name: 'Zain',
            description: 'Dish will be delishes and eat it with raita'
        },
        {
            id: 5,
            recipe_name: 'Chiken Kabab',
            preparing_time: '20 min',
            food_image: require('../assets/dish-1.png'),
            ingredients: ['gosht', 'mirch', 'namak', 'papita', 'koela'],
            chief_name: 'Zain',
            description: 'Dish will be delishes and eat it with raita'
        },

    ],
    LightTheme: {
        iconColor: '#34495E'
    },
    DarkTheme: {
        iconColor: '#E5E5E5'
    },
    LightThemeCss: {
        halfRoundPicBorder: {
            borderWidth: 6,
            borderColor: '#075D86',
            height: 128,
            marginTop: -5,
            borderTopEndRadius: 62,
            borderBottomEndRadius: 62,
            marginLeft: 47,
            width: 77,
            position: 'absolute',
        },
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
            borderRadius: 100,
            padding: 10,
            borderColor: '#075D86',
            marginTop: 10,
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: '#075D86',
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

    },

    DarkThemeCss: {
        halfRoundPicBorder: {
            borderWidth: 6,
            borderColor: '#D9EDF7',
            height: 128,
            marginTop: -5,
            borderTopEndRadius: 62,
            borderBottomEndRadius: 62,
            marginLeft: 47,
            width: 77,
            position: 'absolute',
        },
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

}