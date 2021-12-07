import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import styled from 'styled-components'


function ConnectSample() {
  const {
    status,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
  } = useWallet();

  return (
    <div>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <ButtonHolder>
            {availableInstallTypes.map((connectType) => (
              <Buttons key={'install-' + connectType} onClick={() => install(connectType)} >
                Install {connectType}
              </Buttons>
            ))}
              <Buttons key={'connect-' + availableConnectTypes[1]} onClick={() => connect(availableConnectTypes[1])} >
                Connect
              </Buttons>
          </ButtonHolder>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <ButtonHolder>
            <Buttons onClick={() => disconnect()}>Disconnect</Buttons>
            <p>{wallets[0].terraAddress}</p>
          </ButtonHolder>
        )}
    </div>
  );
}

const Buttons = styled.button`
  padding:15px;
  background-color:#2d5473;
  font-size:1.5rem;
  color:#697884;
  width:200px;
  border-radius:6px;
`
const ButtonHolder = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export default ConnectSample