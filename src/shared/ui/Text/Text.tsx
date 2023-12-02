import { classNames } from '../../lib/classNames/classNames';
import cl from './Text.module.css';

type TextSize = 's' | 'm' | 'l';
type TextWeight = 's_weight' | 'l_weight';
type TextColor = 'normal' | 'warning' | 'gray' | 'white' | 'accent';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
    text: string;
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    align?: TextAlign;
}

export const Text = (props: TextProps) => {
    const {
        text,
        size = 'm',
        weight = 's',
        color = 'normal',
        align = 'left',
    } = props;

    return (
        <p className={classNames(cl.text, {}, [cl[size], cl[weight], cl[color], cl[align]])}>{text}</p>
    )
}
