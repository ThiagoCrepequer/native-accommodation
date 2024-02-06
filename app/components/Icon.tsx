import React from "react";
import { View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg"

interface IIcon {
    onPress?: () => void;
    width?: number;
    height?: number;
    children?: React.ReactNode;
}

const SetaBaixo: React.FC<IIcon> = ({ onPress }) => (
    <Svg
        onPress={onPress}
        width={12}
        height={8}
        fill="none"
    >
        <Path
            fill="#838383"
            d="M6.173 5.02 10.33.861l1.188 1.188-5.345 5.344L.828 2.05 2.015.862 6.173 5.02Z"
        />
    </Svg>
)

const Notificacao: React.FC<IIcon> = ({ onPress }) => (
    <Svg
        onPress={onPress}
        width={19}
        height={24}
        fill="none"
    >
        <Path
            fill="#000"
            d="M16.069 8.897a6.414 6.414 0 1 0-12.828 0v8.551H16.07V8.897Zm2.138 9.264.427.57a.535.535 0 0 1-.427.855H1.103a.534.534 0 0 1-.427-.855l.427-.57V8.897a8.552 8.552 0 1 1 17.104 0v9.264ZM6.983 20.655h5.345a2.672 2.672 0 1 1-5.345 0Z"
        />
    </Svg>
)

const Lupa: React.FC<IIcon> = ({ onPress }) => (
    <Svg
        onPress={onPress}
        width={18}
        height={18}
        fill="none"
    >
        <Path
            fill="#838383"
            d="m14.286 12.824 3.712 3.605-1.226 1.192-3.712-3.606a7.912 7.912 0 0 1-4.869 1.657C3.885 15.672.39 12.278.39 8.095S3.885.517 8.19.517s7.801 3.395 7.801 7.578a7.41 7.41 0 0 1-1.706 4.73Zm-1.74-.625a5.787 5.787 0 0 0 1.713-4.104c0-3.257-2.716-5.894-6.068-5.894-3.353 0-6.068 2.637-6.068 5.894 0 3.256 2.715 5.894 6.068 5.894a6.142 6.142 0 0 0 4.226-1.663l.13-.127Z"
        />
    </Svg>
)

const Configuracao: React.FC<IIcon> = ({ onPress }) => (
    <Svg
        width={18}
        height={18}
        fill="none"
    >
        <Path
            fill="#fff"
            d="M20.842 31.202a2.567 2.567 0 0 1 4.84 0h8.697v1.71h-8.697a2.566 2.566 0 0 1-4.84 0h-3.566v-1.71h3.566Zm5.13-5.986a2.566 2.566 0 0 1 4.841 0h3.566v1.71h-3.566a2.566 2.566 0 0 1-4.84 0h-8.697v-1.71h8.697Zm-5.13-5.986a2.567 2.567 0 0 1 4.84 0h8.697v1.71h-8.697a2.566 2.566 0 0 1-4.84 0h-3.566v-1.71h3.566Zm2.42 1.71a.855.855 0 1 0 0-1.71.855.855 0 0 0 0 1.71Zm5.131 5.986a.855.855 0 1 0 0-1.71.855.855 0 0 0 0 1.71Zm-5.131 5.987a.855.855 0 1 0 0-1.711.855.855 0 0 0 0 1.71Z"
        />
    </Svg>
)


export { SetaBaixo, Notificacao, Lupa, Configuracao }