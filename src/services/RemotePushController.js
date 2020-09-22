// import React, { useEffect } from 'react'
// import { Platform, View } from 'react-native'
// import PushNotification from 'react-native-push-notification'

// export const RemotePushController = () => {
//     // useEffect(() => {
//     PushNotification.configure({

//         // (optional) Called when Token is generated (iOS and Android)
//         onRegister: function (token) {
//             console.log('TOKEN:', token)
//         },
//         // (required) Called when a remote or local notification is opened or received
//         onNotification: function (notification) {
//             console.log('REMOTE NOTIFICATION ==>', notification)
//             // process the notification here
//         },
//         // Android only: GCM or FCM Sender ID
//         popInitialNotification: true,
//         requestPermissions: Platform.OS === 'ios',

//     })
//     // }, [])
//     // return <View></View>
// }
// // export default RemotePushController