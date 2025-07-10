import { ContractAddress } from "@concordium/web-sdk";

const useContractAddress = (index, subindex) => {
  return ContractAddress.fromSchemaValue({
    index,
    subindex,
  });
};

export default useContractAddress;
