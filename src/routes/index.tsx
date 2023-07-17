import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../storage/store/hooks";
import ProtectedLayout from "../components/protectedLayout/ProtectedLayout";
import PublicLayout from "../components/publicLayout/PublicLayout";

export const ProtectedRoutes = () => {
    let auth = useAppSelector(state => state.auth)
    let location = useLocation();

    return (!auth.isAuth)
        ? <Navigate to="/login" state={{ from: location }} replace />
        : <ProtectedLayout>
            <Outlet />
        </ProtectedLayout>
}

export const PublicRoutes = () => {
    let auth = useAppSelector(state => state.auth)
    let location = useLocation();

    return (auth.isAuth)
        ? <Navigate to="/home" state={{ from: location }} replace />
        : <PublicLayout>
            <Outlet />
        </PublicLayout>

}
