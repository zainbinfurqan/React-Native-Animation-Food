import React, { useState } from 'react';
import { View, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

function WaterMark(props) {
    const [data, setData] = useState({})


    function openGallery() {
        ImagePicker.launchCamera(options, (response) => {
            // Same code as in above section!
            let data = {
                data: response.data,
                filename: response.fileName,
                path: `file://${response.path}`,
                type: response.type,
                // data: `image/jpeg;base64,` + response.data,
                uri: response.uri,
            }
            setData(data)
        });
    }

    async function upload() {
        const formData = new FormData();
        formData.append('username', 'abc123');
        formData.append('avatar', data);
        fetch('https://a7860074adbe.ngrok.io/watermark', {
            method: 'POST',
            body: formData
            // body: JSON.stringify({ name: 'zain' })
        })
            .then(response => {
                console.log(response)
                response.json()
            })
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <View>
            <Button title="choose file" onPress={openGallery} />
            <Button title="Upload" onPress={upload} />

        </View>
    );
}

export default WaterMark;