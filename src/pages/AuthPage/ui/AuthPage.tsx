import { memo } from 'react';
import cl from './AuthPage.module.css';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';

const AuthPage = memo(() => {
    return (
        <div className={cl.authPage} style={{padding: '20px', background: 'white'}}>
            <Input
                addonTop={<Text text='Имя' />}
                addonBottom={<Text text='Имя' />}
            />
        </div>
    );
});

export default AuthPage;