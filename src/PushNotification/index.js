// import React, { useEffect } from 'react'
// import { Text, View, Button, StyleSheet } from 'react-native'
// import { LocalNotification } from '../services/LocalPushController'
// // import { RemotePushController } from '../services/RemotePushController'
// import PushNotification from 'react-native-push-notification'
// const PushNotificaiton_ = () => {
//     const handleButtonPress = () => {
//         LocalNotification()
//         // RemotePushController()
//         // RemotePushController()
//     }

//     useEffect(() => {
//         console.log('TOKEN:')
//         PushNotification.configure({
//             senderID: '930877933655',
//             // (optional) Called when Token is generated (iOS and Android)
//             onRegister: function (token) {
//                 console.log('TOKEN:', token)
//             },
//             onRegistrationError: function (error) {
//                 console.log(error)
//             },
//             // (required) Called when a remote or local notification is opened or received
//             onNotification: function (notification) {
//                 console.log('REMOTE NOTIFICATION ==>', notification)
//                 // process the notification here
//             },
//             // Android only: GCM or FCM Sender ID
//             popInitialNotification: true,
//             requestPermissions: Platform.OS === 'ios',

//         })
//     }, [])

//     return (
//         <View style={styles.container}>
//             <Text>Press a button to trigger the notification</Text>
//             <View style={{ marginTop: 20 }}>
//                 <Button title={'Local Push Notification'} onPress={handleButtonPress} />
//             </View>
//             {/* <RemotePushController /> */}
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     buttonContainer: {
//         marginTop: 20
//     }
// })
// export default PushNotificaiton_