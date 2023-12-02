import React, {
    InputHTMLAttributes, ReactNode, memo, useState,
} from 'react';
import cl from './Input.module.css';
import { Text } from '../Text/Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onBlur' | 'onFocus'>

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (value: string) => void;
    addonTop?: ReactNode;
    addonBottom?: ReactNode;
    minLength?: number;
    regularExpression?: RegExp;
    onlyNumbers?: boolean;
    setIsValidate?: (value: boolean) => void;
}

const EmptyField: ReactNode = <Text
    text='поле не может быть пустым'
    color='warning'
    size='s'
/>

const ShortField: ReactNode = <Text
    text='пароль должен быть не менее 8 символов'
    color='warning'
    size='s'
/>

const NotRegField: ReactNode = <Text
    text='введите значение корректно'
    color='warning'
    size='s'
/>

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        onBlur,
        onFocus,
        addonTop,
        addonBottom,
        minLength = 0,
        regularExpression = null,
        onlyNumbers = false,
        setIsValidate,
        ...otherProps
    } = props;

    const [currentAddonBottom, setCurrentAddonBottom] = useState<ReactNode>(addonBottom);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        if (onlyNumbers) {
            value = value.replace(/[^0-9+]/g, '');
        }

        onChange?.(value);
    };

    const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value.length === 0) {
            setCurrentAddonBottom(EmptyField);
            setIsValidate?.(false);
        } else if (minLength > 0 && value.length < minLength) {
            setCurrentAddonBottom(ShortField);
            setIsValidate?.(false);
        } else if (regularExpression && !regularExpression.test(value)) {
            setCurrentAddonBottom(NotRegField);
            setIsValidate?.(false);
        } else {
            setCurrentAddonBottom(addonBottom || null);
            setIsValidate?.(true);
        }
    };

    return (
        <div className={cl.inputWrapper}>
            <div className={cl.addonTop}>{addonTop}</div>
            <input
                className={cl.input}
                value={value}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                {...otherProps}
            />
            <div className={cl.addonBottom}>{currentAddonBottom}</div>
        </div>
    );
});
