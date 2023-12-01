import { memo } from 'react';
import cl from './AuthPage.module.css';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';

const AuthPage = memo(() => {
    return (
        <div className={cl.authPage}>
            <Button disabled>
                <Text text='Регистрация' weight='l_weight' color='white' />
            </Button>
        </div>
    );
});

export default AuthPage;