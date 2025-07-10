import React from "react";
import {
  TESTNET,
  WithWalletConnector,
  stringMessage,
  useConnect,
  useConnection,
  useWalletConnectorSelector,
} from "@concordium/react-components";
import useAccountAddress from "../hooks/useAccountAddress";
import useContractAddress from "../hooks/useContractAddress";

const ConcordiumWalletConnector = ({ children }) => {
  return (
    <WithWalletConnector network={TESTNET}>
      {(props) => children(props)}
    </WithWalletConnector>
  );
};

export {
  TESTNET,
  useConnect,
  stringMessage,
  useConnection,
  useAccountAddress,
  useContractAddress,
  ConcordiumWalletConnector,
  useWalletConnectorSelector,
};
