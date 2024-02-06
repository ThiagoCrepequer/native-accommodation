import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Defs, LinearGradient, Rect, Stop, Svg } from 'react-native-svg';

interface IButton {
    width?: number;
    height?: number;
    onPress?: () => void;
    children: React.ReactNode;
}

const BotaoPadrao: React.FC<IButton> = ({ onPress, width = 52, height = 52, children }) => (
        <Svg
            onPress={onPress}
            fill="none"
            width={width}
            height={height}
        >
            <Rect
                x={0.172}
                y={0.414}
                fill="url(#a)"
                rx={10.69}
                width={width}
                height={height}
            />
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}>
                {children}
            </View>
            <Defs>
                <LinearGradient
                    id="a"
                    x1={25.828}
                    x2={25.828}
                    y1={-24.255}
                    y2={67.841}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.14} stopColor="#A0DAFB" />
                    <Stop offset={1} stopColor="#0A8ED9" />
                </LinearGradient>
            </Defs>
        </Svg>
)

export { BotaoPadrao };