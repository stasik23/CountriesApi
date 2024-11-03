import { Navbar } from '../Navbar';
import { useLoader } from '../../utils/LoaderUtil';
import { Loader } from '../Loader';
import { AuthRouter } from '../../provider/AuthRouter';

export const Layout = ({ children }: any) => {
    const { isLoading } = useLoader();
    return (
        <>
            <Navbar isDark={true} />
            <AuthRouter>
                {isLoading ? <Loader /> : children}
            </AuthRouter>
        </>
    )
}