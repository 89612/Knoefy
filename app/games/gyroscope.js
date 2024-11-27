import { Gyroscope } from 'expo-sensors';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle, clamp } from 'react-native-reanimated';

export default function Gyrogame() {
    const [x, setX] = useState(0);
    const [subscription, setSubscription] = useState(null);
    
    const _fast = () => Gyroscope.setUpdateInterval(16);
    
    const _subscribe = () => {
        _fast()
        setSubscription(
            Gyroscope.addListener(gyroscopeData => {
                setX(oldX => clamp(oldX + gyroscopeData.z * 20, -300, 300))
            })
        );
      };
    
    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };
    
    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: x}
            ]
        }
    });

    return <View className="w-full h-full justify-center items-center">
        <Animated.View className="h-10 w-10 bg-black rounded-full" style={style}>

        </Animated.View>
    </View>
}