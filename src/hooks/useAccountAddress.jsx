import { AccountAddress } from "@concordium/web-sdk";

const useAccountAddress = (account) => {
  try {
    if (account) {
      return AccountAddress.fromBase58(account);
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default useAccountAddress;
