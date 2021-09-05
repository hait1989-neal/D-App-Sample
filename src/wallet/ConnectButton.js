import { MyWallet } from './MyWallet'

const ConnectButton = () => {
    const { getWallet, onLogin, onLogout } = MyWallet()
    const myWallet = getWallet();
    if (myWallet) {
        console.log(myWallet);
        return (
            <button onClick={() => onLogout()}>
                LOG OUT
            </button>
        )
    } 
    return (
             <button onClick={() => onLogin()}>
                CONNECT
            </button>
        )
  }
  export default ConnectButton