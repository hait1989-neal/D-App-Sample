import { useState } from "react";
import moralis from "moralis";

moralis.initialize(process.env.REACT_APP_MORALIS_APPLICATION_ID);
moralis.serverURL = process.env.REACT_APP_MORALIS_SERVER_URL;
const initialUser = moralis.User.current();

export const MyWallet = () => {
    const [user, setUser] = useState(initialUser);
    const onLogin = async () => {
        const user = await moralis.authenticate();
        setUser(user)
    }
    const onLogout = () => {
        moralis.User.logOut();
        setUser(null)
    }
    const getWallet = () => {
        return user;
    }
    return {getWallet, onLogin, onLogout};
}
