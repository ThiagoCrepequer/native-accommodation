import React from 'react';
import { Button as Botao, ButtonProps } from 'react-native';

interface IButton extends ButtonProps {
    title: string;
    onPress?: () => void;
}

const ButtonEnviar: React.FC<IButton> = ({ title, onPress }) => {
    return (
        <Botao title={title} onPress={onPress}/>
    );
}

export { ButtonEnviar };