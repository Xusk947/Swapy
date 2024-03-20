import { Header } from 'react-aria-components'
import './NavBar.css'
import { CustomTonConnectButton } from '../CustomTonConnectButton/CustomTonConnectButton'
export function NavBar() {
    return (
        <>
            <Header>
                <span> My TonApp </span>

                <div>
                    <CustomTonConnectButton />
                </div>
            </Header>
        </>
    )
}