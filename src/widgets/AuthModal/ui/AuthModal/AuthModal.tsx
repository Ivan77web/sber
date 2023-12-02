import { useCallback, useState } from 'react';
import { Text } from '../../../../shared/ui/Text/Text';
import { AuthFormOne } from '../AuthFormOne/AuthFormOne';
import { AuthFormTwo } from '../AuthFormTwo/AuthFormTwo';
import cl from './AuthModal.module.css';

export const AuthModal = () => {
    const [activePage, setActivePage] = useState<1 | 2>(1);

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [validateLogin, setValidateLogin] = useState<boolean>(false);
    const [validatePassword, setValidatePassword] = useState<boolean>(false);
    const [validatePhone, setValidatePhone] = useState<boolean>(false);
    const [validateName, setValidateName] = useState<boolean>(false);
    const [validateFirstname, setValidateFirstname] = useState<boolean>(false);
    const [validateEmail, setValidateEmail] = useState<boolean>(false);

    const onSubmitHandler = useCallback(() => {
        console.log({
            login,
            password,
            phone,
            name,
            firstname,
            email,
        });
    }, [login, password, phone, name, firstname, email])

    return (
        <div className={cl.modal}>
            <Text
                size='l'
                text='Регистрация'
                align='center'
            />

            <div className={cl.forms}>
                {
                    (activePage === 1) && (
                        <AuthFormOne
                            onNext={() => setActivePage(2)}
                            login={login}
                            setLogin={setLogin}
                            password={password}
                            setPassword={setPassword}
                            phone={phone}
                            setPhone={setPhone}
                            validateLogin={validateLogin}
                            setValidateLogin={setValidateLogin}
                            validatePassword={validatePassword}
                            setValidatePassword={setValidatePassword}
                            validatePhone={validatePhone}
                            setValidatePhone={setValidatePhone}
                        />
                    )
                }

                {
                    (activePage === 2) && (
                        <AuthFormTwo
                            onNext={onSubmitHandler}
                            onPrev={() => setActivePage(1)}
                            name={name}
                            setName={setName}
                            firstname={firstname}
                            setFirstname={setFirstname}
                            email={email}
                            setEmail={setEmail}
                            validateName={validateName}
                            setValidateName={setValidateName}
                            validateFirstname={validateFirstname}
                            setValidateFirstname={setValidateFirstname}
                            validateEmail={validateEmail}
                            setValidateEmail={setValidateEmail}
                        />
                    )
                }
            </div>
        </div>
    )
}