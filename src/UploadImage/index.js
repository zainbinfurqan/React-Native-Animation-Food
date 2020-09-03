import React, { useEffect } from 'react';
import { View, Button, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';

function UploadImage(props) {

    useEffect(() => {
        if (Platform.OS === 'android') {
            //Request required permissions from Android
            requestCameraAndAudioPermission().then((_) => { });
        }
    }, [])

    async function requestCameraAndAudioPermission() {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
            ]);
            if (
                granted["android.permission.RECORD_AUDIO"] ===
                PermissionsAndroid.RESULTS.GRANTED &&
                granted["android.permission.CAMERA"] ===
                PermissionsAndroid.RESULTS.GRANTED
            ) {
                console.log("You can use the cameras & mic");
            } else {
                console.log("Permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    const options = {
        mediaType: 'image',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };

    function selectImage() {
        console.log("image")
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.uri) {
                console.log(response)
                let data = {
                    name: response.fileName,
                    type: response.type,
                    uri: `file://${response.path}`
                }
                uploadImage(data)
            }
        });
    }

    async function uploadImage(data) {
        console.log(data.uri)
        try {
            let formData = new FormData();
            formData.append('file', data);
            formData.append('upload_preset', 'an2dckm9')
            fetch('https://api.cloudinary.com/v1_1/zainahmed/image/upload', {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(response => {
                    console.log(response)
                })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={{ flex: 1, borderWidth: 2, padding: 5, justifyContent: 'center' }}>
            <Button onPress={selectImage} title='Select Image' />
        </View>
    )
}

export default UploadImage