import React from 'react';
import { Alert, Button, Dimensions, Linking, Platform, View } from 'react-native';

const InfoAndCallPage = () => {
    const handleInfoClick = () => {
        const os = Platform.OS;
        const model = Platform.constants.Model;
        const { width, height } = Dimensions.get('window');

        Alert.alert(
            'Device Information',
            `Operating System: ${os}\nModel: ${model}\nWidth: ${width}\nHeight: ${height}`
        );
    };

    const handleCallClick = () => {
        const phoneNumber = '1234567890'; // replace with the number you want to call
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View>
            <Button title="Show Device Info" onPress={handleInfoClick} />
            <Button title="Call Number" onPress={handleCallClick} />
        </View>
    );
};

export default InfoAndCallPage;