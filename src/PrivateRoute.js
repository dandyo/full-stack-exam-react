import { AuthContext } from './AuthContext'
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return <>
        {/* {<AdminHeader /> */}
        <Container>
            <Container>{children}</Container>
        </Container>
        {/* <AdminFooter />} */}
    </>;
};

export default PrivateRoute;