import { BlurView } from "@react-native-community/blur";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
















export default BlurIos = (props) => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <ImageBackground
                source={require('../assets/images/optimusprime.jpg')}
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}
            >
                <BlurView
                    style={{
                        margin: 40,
                        padding: 20,
                        paddingVertical: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                    }}
                    blurType="light"
                    blurAmount={7}
                    blurRadius={5}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                        Optimum Pride
                    </Text>
                    <Text
                        style={{
                            marginTop: 20,
                            fontStyle: 'italic',
                            color: 'white'
                        }}>
                            Optimus Prime adalah salah satu karakter dari Transformer ges !
                        </Text>
                </BlurView>
            </ImageBackground>
        </View>
    )
}