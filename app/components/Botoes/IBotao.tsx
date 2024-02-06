export interface IBotao {
    width?: number;
    height?: number;
    onPress?: () => void;
    children: React.ReactNode;
}