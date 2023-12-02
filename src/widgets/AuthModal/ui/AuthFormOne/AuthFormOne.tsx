import { memo } from "react"
import { Input } from "../../../../shared/ui/Input/Input"
import { Text } from "../../../../shared/ui/Text/Text"
import cl from './AuthFormOne.module.css';
import { Button } from "../../../../shared/ui/Button/Button";

interface AuthFormOneProps {
    login: string;
    setLogin: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    onNext: () => void;
    validateLogin: boolean;
    setValidateLogin: (value: boolean) => void;
    validatePassword: boolean;
    setValidatePassword: (value: boolean) => void;
    validatePhone: boolean;
    setValidatePhone: (value: boolean) => void;
}

export const AuthFormOne = memo((props: AuthFormOneProps) => {
    const {
        onNext,
        login,
        setLogin,
        password,
        setPassword,
        phone,
        setPhone,
        validateLogin,
        setValidateLogin,
        validatePassword,
        setValidatePassword,
        validatePhone,
        setValidatePhone,
    } = props;

    return (
        <div className={cl.block}>
            <div className={cl.inputs}>
                <Input
                    value={login}
                    onChange={setLogin}
                    addonTop={<Text text='Логин' />}
                    setIsValidate={setValidateLogin}
                />

                <Input
                    value={password}
                    onChange={setPassword}
                    minLength={8}
                    type="password"
                    addonTop={<Text text='Пароль' />}
                    setIsValidate={setValidatePassword}
                />

                <Input
                    onlyNumbers
                    value={phone}
                    onChange={setPhone}
                    addonTop={<Text text='Номер телефона' />}
                    addonBottom={<Text size="s" color="gray" text='на случай, если вы забудете свой пароль' />}
                    regularExpression={/^((\+7|7|8)+([0-9]){10})$/}
                    setIsValidate={setValidatePhone}
                />
            </div>

            <Button
                disabled={!(validateLogin && validatePassword && validatePhone)}
                onClick={onNext}
            >
                <Text text='Продолжить' weight="l_weight" align="center" color="white" />
            </Button>
        </div>
    )
})