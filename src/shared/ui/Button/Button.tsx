import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cl from './Button.module.css';

export type ButtonVariants = 'clear' | 'filled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    disabled?: boolean;
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {
        variant = 'filled',
        disabled = false,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cl.Button, { [cl.disabled]: disabled }, [cl[variant]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
