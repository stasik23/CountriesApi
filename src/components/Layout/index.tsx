import { Navbar } from '../Navbar';
import { AuthRouter } from '../../provider/AuthRouter';

export const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar isDark={true} />
            <AuthRouter>
                {children}
            </AuthRouter>
        </>
    )
}