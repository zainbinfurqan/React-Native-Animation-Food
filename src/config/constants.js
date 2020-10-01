

export const constants = {
    darkTheme: {
        textColor: 'white',
        iconsColors: 'white',
        backgroundColor: 'black'
    },
    lightTheme: {
        textColor: 'black',
        iconsColors: 'black',
        backgroundColor: 'white'
    },
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
            recipe_name: 'Greek Garbanzo Stew',
            preparing_time: '40 Mins',
            food_image: require('../assets/dish-5.png'),
            ingredients: ['onion', 'diced', 'oregano', 'tomato paste', 'baby spinach', 'rosemary', 'feta cheese', 'garbanzo beans'],
            chief_name: 'KindMealChef',
            description: `Saute onion in hot oil in a Dutch oven over medium heat for 6-8 minutes,  15 minute`
        },
        {
            id: 2,
            recipe_name: 'Vegetarian VFC',
            preparing_time: '1 Hr',
            food_image: require('../assets/dish-4.png'),
            ingredients: ['Rolled Oats', 'Dried Thyme', 'Onion', 'Tomato', 'White/Black Pepper'],
            chief_name: 'BluePenguin',
            description: `Saute onion in hot oil in a Dutch oven over medium heat for 6-8 minutes,  15 minute`
        },
        {
            id: 3,
            recipe_name: 'Ceasar Dressing',
            preparing_time: '20 Mins',
            food_image: require('../assets/dish-3.png'),
            ingredients: ['Shallot', 'Mayonnaise', 'Anchovy fillets', 'Yellow onion', 'koela'],
            chief_name: 'Janelle',
            description: `Saute onion in hot oil in a Dutch oven over medium heat for 6-8 minutes,  15 minute`
        },
        {
            id: 4,
            recipe_name: 'Greek Garbanzo Stew',
            preparing_time: '40 Mins',
            food_image: require('../assets/dish-5.png'),
            ingredients: ['onion', 'diced', 'oregano', 'tomato paste', 'baby spinach', 'rosemary', 'feta cheese', 'garbanzo beans'],
            chief_name: 'KindMealChef',
            description: `Saute onion in hot oil in a Dutch oven over medium heat for 6-8 minutes,  15 minute`
        },
        {
            id: 5,
            recipe_name: 'Vegetarian VFC',
            preparing_time: '1 Hr',
            food_image: require('../assets/dish-4.png'),
            ingredients: ['Rolled Oats', 'Dried Thyme', 'Onion', 'Tomato', 'White/Black Pepper'],
            chief_name: 'BluePenguin',
            description: `Saute onion in hot oil in a Dutch oven over medium heat for 6-8 minutes,  15 minute`
        },

    ],
    LightTheme: {
        iconColor: '#07344B'
    },
    DarkTheme: {
        iconColor: '#E5E5E5'
    },
    LightThemeCss: {
        halfRoundPicBorder: {
            borderWidth: 6,
            borderColor: '#07344B',
            height: 128,
            marginTop: -5,
            borderTopStartRadius: 62,
            borderBottomStartRadius: 62,
            marginRight: 60,
            width: 70,
            position: 'absolute',
        },
        lineSeperater: {
            borderBottomWidth: 0.34,
            marginRight: 20,
            borderColor: '#07344B',
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
            fontSize: 25,
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
        line: { borderBottomWidth: 0.30, marginRight: 10, marginLeft: 10, borderColor: '#07344B' },

    },

    DarkThemeCss: {
        halfRoundPicBorder: {
            borderWidth: 6,
            borderColor: '#D9EDF7',
            height: 128,
            marginTop: -4,
            borderTopEndRadius: 62,
            borderBottomEndRadius: 62,
            marginLeft: 60,
            width: 65,
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
            fontSize: 25,
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