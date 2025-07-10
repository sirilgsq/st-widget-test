import React, { useEffect } from "react";
import {
  ConcordiumWalletConnector,
  useConnect,
  useConnection,
} from "./comp/con";
import { BROWSER_WALLET } from "./concordium-config";

const IframeApp = (appProps) => {
  return (
    <ConcordiumWalletConnector>
      {(props) => <WalletForm {...props} {...appProps} />}
    </ConcordiumWalletConnector>
  );
};

export default IframeApp;

const WalletForm = (props) => {
  const {
    setActiveConnectorType,
    activeConnectorType,
    activeConnector,
    connectedAccounts,
    genesisHashes,
  } = props;
  console.log(props, "props");
  console.log(activeConnectorType, "activeConnectorType");

  // *********************************************

  const { connection, setConnection, account } = useConnection(
    connectedAccounts,
    genesisHashes
  );
  const { connect, isConnecting } = useConnect(activeConnector, setConnection);

  console.log(isConnecting, " connecting...");
  console.log(account, " account");

  useEffect(() => {
    setActiveConnectorType(BROWSER_WALLET);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => {
          if (connect) {
            connect();
          } else {
            console.warn("Connect is missing");
          }
        }}
      >
        Connect
      </button>
    </div>
  );
};