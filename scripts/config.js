import { fantomPools } from '../src/features/configure/vault/fantom_pools.js';
import { polygonPools } from '../src/features/configure/vault/polygon_pools.js';
import { arbitrumPools } from '../src/features/configure/vault/arbitrum_pools.js';

export const chainPools = {
  fantom: fantomPools,
  polygon: polygonPools,
  arbitrum: arbitrumPools,
};

export const chainRpcs = {
  fantom: process.env.FANTOM_RPC || 'https://rpc.ftm.tools/',
  polygon: process.env.POLYGON_RPC || 'https://polygon-rpc.com',
  arbitrum: process.env.ARBITRUM_RPC || 'https://arb1.arbitrum.io/rpc',
};
