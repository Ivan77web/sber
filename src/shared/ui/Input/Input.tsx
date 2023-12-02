import React, {
    InputHTMLAttributes, ReactNode, memo,
} from 'react';
import cl from './Input.module.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onBlur' | 'onFocus'>

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (value: string) => void;
    addonTop?: ReactNode;
    addonBottom?: ReactNode;
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        onBlur,
        onFocus,
        addonTop,
        addonBottom,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onBlur?.(e.target.value);
    };

    const onFocusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFocus?.(e.target.value);
    };

    return (
        <div className={cl.inputWrapper}>
            <div className={cl.addonLeft}>{addonTop}</div>
            <input
                className={cl.input}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                {...otherProps}
            />
            <div className={cl.addonRight}>{addonBottom}</div>
        </div>
    );
});
