import {
  BrowserWalletConnector,
  CONCORDIUM_WALLET_CONNECT_PROJECT_ID,
  WalletConnectConnector,
  WalletConnectEvent,
  WalletConnectMethod,
  ephemeralConnectorType,
} from "@concordium/react-components";

const WALLET_CONNECT_OPTS = {
  projectId: "cabfcdea55e1a7c194ef7641b426edbe",
  metadata: {
    name: "Sign Message",
    description: "Example dApp for signing an arbitrary message.",
    url: "#",
    icons: ["https://walletconnect.com/walletconnect-logo.png"],
  },
};

const WALLET_CONNECT_SCOPE = {
  methods: [WalletConnectMethod.SignMessage],
  events: [WalletConnectEvent.AccountsChanged, WalletConnectEvent.ChainChanged],
};

export const BROWSER_WALLET = ephemeralConnectorType(
  BrowserWalletConnector.create
);
export const WALLET_CONNECT = ephemeralConnectorType((delegate, network) =>
  WalletConnectConnector.create(
    WALLET_CONNECT_OPTS,
    delegate,
    network,
    WALLET_CONNECT_SCOPE
  )
);
