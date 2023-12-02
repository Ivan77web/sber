import { memo } from "react";
import cl from './AuthFormTwo.module.css';
import { Input } from "../../../../shared/ui/Input/Input"
import { Text } from "../../../../shared/ui/Text/Text"
import { Button } from "../../../../shared/ui/Button/Button";

interface AuthFormTwoProps {
    name: string;
    setName: (value: string) => void;
    firstname: string;
    setFirstname: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    onNext: () => void;
    onPrev: () => void;
    validateName: boolean;
    setValidateName: (value: boolean) => void;
    validateFirstname: boolean;
    setValidateFirstname: (value: boolean) => void;
    validateEmail: boolean;
    setValidateEmail: (value: boolean) => void;
}

export const AuthFormTwo = memo((props: AuthFormTwoProps) => {
    const {
        name,
        setName,
        firstname,
        setFirstname,
        email,
        setEmail,
        onNext,
        onPrev,
        validateName,
        setValidateName,
        validateFirstname,
        setValidateFirstname,
        validateEmail,
        setValidateEmail,
    } = props;

    return (
        <div className={cl.block}>
            <div className={cl.inputs}>
                <Input
                    value={name}
                    onChange={setName}
                    addonTop={<Text text='Имя' />}
                    setIsValidate={setValidateName}
                />

                <Input
                    value={firstname}
                    onChange={setFirstname}
                    addonTop={<Text text='Фамилия' />}
                    setIsValidate={setValidateFirstname}
                />

                <Input
                    value={email}
                    onChange={setEmail}
                    addonTop={<Text text='E-mail' />}
                    addonBottom={<Text size="s" color="gray" text='будем присылать крутые открытки по праздникам' />}
                    regularExpression={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                    setIsValidate={setValidateEmail}
                />
            </div>

            <div className={cl.buttons}>
                <Button
                    disabled={!(validateName && validateFirstname && validateEmail)}
                    onClick={onNext}
                >
                    <Text text='Зарегистрировать' weight="l_weight" align="center" color="white" />
                </Button>

                <Button variant="clear" onClick={onPrev}>
                    <Text text='< Назад' weight="l_weight" align="center" color="accent" />
                </Button>
            </div>
        </div>
    )
})