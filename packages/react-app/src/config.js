import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xfB278c9b7e4380862AA9e5B2c311727954C322b0";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/SzP0Bn4Nw4nyy776bEpmzTrC6HX_fe1A",
  },
};
