import { memo } from 'react';
import cl from './AuthPage.module.css';
import { AuthModal } from '../../../widgets/AuthModal';

const AuthPage = memo(() => {
    return (
        <div className={cl.authPage}>
            <AuthModal />
        </div>
    );
});

export default AuthPage;