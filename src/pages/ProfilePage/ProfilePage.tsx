import { useNavigate } from "react-router-dom";
import { Auth } from "../../api/Auth";
import { Button } from "antd";
import { useEffect } from "react";

export const ProfilePage = () => {
    const auth = new Auth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isLogin()) {
            navigate('/login');
        }
    })

    const logout = () => {
        auth.logout();
        navigate('/login');
    }

    return (
        <>
            <h2>
                страница с произвольным текстом, недоступная без авторизации
            </h2>
            <Button type="primary" onClick={logout}>Logout</Button>
        </>
    );
};