import { Navbar } from '../Navbar';
import { useLoader } from '../../utils/LoaderUtil';
import { Loader } from '../Loader';

export const Layout = ({ children }: any) => {
    const { isLoading } = useLoader();
    return (
        <>

            <Navbar />
            {isLoading && <Loader />}
            {children}
        </>
    )
}