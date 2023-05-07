import { NewsPage, ProfilePage, LoginPage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Layout } from "./layout/Layout";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<NewsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={<div>Not Found Page</div>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
};
