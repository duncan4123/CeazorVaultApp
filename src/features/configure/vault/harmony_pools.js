export const harmonyPools = [
  {
    id: 'one-bifi-maxi',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Maxi',
    token: 'BIFI',
    tokenDescription: 'Beefy.Finance',
    tokenAddress: '0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooOneBIFI',
    earnedTokenAddress: '0x6207536011918F1A0D8a53Bc426f4Fd54df2E5a8',
    earnContractAddress: '0x6207536011918F1A0D8a53Bc426f4Fd54df2E5a8',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beefy.Finance',
    assets: ['BIFI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
    createdAt: 1636644198,
  },
  {
    id: 'sushi-one-bifi-wone',
    name: 'BIFI-ONE LP',
    token: 'BIFI-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x27f3b2Df4a81382202E87EE40429e0212ecc7d3F',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiBIFI-ONE',
    earnedTokenAddress: '0x06A1f520555222758eaE4dA0573351FdaD1e7843',
    earnContractAddress: '0x06A1f520555222758eaE4dA0573351FdaD1e7843',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-bifi-wone',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['BIFI', 'ONE'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    createdAt: 1641218645,
  },
  {
    id: 'sushi-one-wone-1btc',
    name: '1BTC-ONE LP',
    token: '1BTC-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x4F3d9ac088CDF31b1831db3AaF5803aB35c200c4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushi1BTC-ONE',
    earnedTokenAddress: '0x942aa6324E5D0C102d3Ad6607495ac5e798a991a',
    earnContractAddress: '0x942aa6324E5D0C102d3Ad6607495ac5e798a991a',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-wone-1btc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['BTC', 'ONE'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0xdc54046c0451f9269FEe1840aeC808D36015697d',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xdc54046c0451f9269FEe1840aeC808D36015697d',
    createdAt: 1641218490,
  },
  {
    id: 'curve-harmony-tricrypto',
    logo: 'uncategorized/ATRICRYPTO.png',
    name: 'TriCrypto',
    token: 'crvUSDBTCETH',
    tokenDescription: 'Curve',
    tokenAddress: '0x99E8eD28B97c7F1878776eD94fFC77CABFB9B726',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurveTriCrypto',
    earnedTokenAddress: '0xAFEe37A5FaAf9cDb9E0528bb60E457b570b5520E',
    earnContractAddress: '0xAFEe37A5FaAf9cDb9E0528bb60E457b570b5520E',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-harmony-tricrypto',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Curve',
    assets: ['DAI', 'USDC', 'USDT', 'WBTC', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'PLATFORM_ESTABLISHED',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratMultiLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://harmony.curve.fi/tricrypto/deposit',
    createdAt: 1638254407,
  },
  {
    id: 'curve-harmony-3pool',
    logo: 'polygon/CURVE-3Pool.png',
    name: 'DAI/USDC/USDT',
    token: '3CRV',
    tokenDescription: 'Curve',
    tokenAddress: '0xC5cfaDA84E902aD92DD40194f0883ad49639b023',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurve3CRV',
    earnedTokenAddress: '0x44e67bCDf95aE53b60ab20929626274640998FDB',
    earnContractAddress: '0x44e67bCDf95aE53b60ab20929626274640998FDB',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-harmony-3pool',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Curve',
    assets: ['DAI', 'USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'PLATFORM_ESTABLISHED',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratMultiLP',
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://harmony.curve.fi/3pool/deposit',
    createdAt: 1638252423,
  },
  {
    id: 'sushi-one-1ygg-1eth-eol',
    name: '1YGG-1ETH LP',
    token: '1YGG-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x40112850EFd90e9e17b56de35d86BdFf9f4d07Fd',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiYGG-ETH',
    earnedTokenAddress: '0x69F683aa79ab78B95A9823Ace8b9771Ad18fFC71',
    earnContractAddress: '0x69F683aa79ab78B95A9823Ace8b9771Ad18fFC71',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1ygg-1eth',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'SushiSwap',
    assets: ['YGG', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0x63cf309500d8be0B9fDB8F1fb66C821236c0438c',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0x63cf309500d8be0B9fDB8F1fb66C821236c0438c',
    createdAt: 1631279238,
  },
  {
    id: 'sushi-one-1eth-1aave',
    name: '1AAVE-1ETH LP',
    token: '1AAVE-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x913De0F91169680c32C8F27212361272Ef4FDfd9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiAAVE-ETH',
    earnedTokenAddress: '0xeD55397CF8e01c21Fe51F2ca8D43137f0950cb42',
    earnContractAddress: '0xeD55397CF8e01c21Fe51F2ca8D43137f0950cb42',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1eth-1aave',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['AAVE', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0x63cf309500d8be0B9fDB8F1fb66C821236c0438c',
    createdAt: 1631279357,
  },
  {
    id: 'sushi-one-1axs-1eth-eol',
    name: '1AXS-1ETH LP',
    token: '1AXS-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xbB680Ba75F7e3e404923D04D484af5ce96b4A4bF',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiAXS-ETH',
    earnedTokenAddress: '0xFf47dfa664dA42bBF3adA2179A81Cc82b0d549d7',
    earnContractAddress: '0xFf47dfa664dA42bBF3adA2179A81Cc82b0d549d7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1axs-1eth',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'SushiSwap',
    assets: ['AXS', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0x14A7B318fED66FfDcc80C1517C172c13852865De',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0x14A7B318fED66FfDcc80C1517C172c13852865De',
    createdAt: 1631279474,
  },
  {
    id: 'sushi-one-1eth-1dai-eol',
    name: '1DAI-1ETH LP',
    token: '1DAI-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xc5B8129B411EF5f5BE22e74De6fE86C3b69e641d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiDAI-ETH',
    earnedTokenAddress: '0x9f2B43337Fa1AD1b591e82981Efaa784dbCF26Cb',
    earnContractAddress: '0x9f2B43337Fa1AD1b591e82981Efaa784dbCF26Cb',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1eth-1dai',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    platform: 'SushiSwap',
    assets: ['DAI', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
    createdAt: 1631282246,
    retiredReason: 'tvl',
  },
  {
    id: 'sushi-one-1usdt-1eth-eol',
    name: '1USDT-1ETH LP',
    token: '1USDT-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x02f4d0021E3cb8736108E11C8DF02FbBd6EEEDBf',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDT-ETH',
    earnedTokenAddress: '0xB5961dF7CcA854353e4BCCC3E4c241d07DBcE9d2',
    earnContractAddress: '0xB5961dF7CcA854353e4BCCC3E4c241d07DBcE9d2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1usdt-1eth',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    platform: 'SushiSwap',
    assets: ['USDT', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
    createdAt: 1631282425,
    retiredReason: 'tvl',
  },
  {
    id: 'sushi-one-1eth-1frax',
    name: '1FRAX-1ETH LP',
    token: '1FRAX-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xa46BBA980512E328E344Ce12BB969563f3429F05',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiFRAX-ETH',
    earnedTokenAddress: '0xF0d26842c3935A618e6980C53fDa3A2D10A02eb7',
    earnContractAddress: '0xF0d26842c3935A618e6980C53fDa3A2D10A02eb7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1eth-1frax',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['FRAX', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0xeB6C08ccB4421b6088e581ce04fcFBed15893aC3',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0xeB6C08ccB4421b6088e581ce04fcFBed15893aC3',
    createdAt: 1631282533,
  },
  {
    id: 'sushi-one-ust-1eth',
    name: 'UST-1ETH LP',
    token: 'UST-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x9293DFDd719eE2163f2e158E66Ef75722Ed712B4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUST-ETH',
    earnedTokenAddress: '0x026cd63Bf3Fc511449f0229BD4a6323dD2F27b5a',
    earnContractAddress: '0x026cd63Bf3Fc511449f0229BD4a6323dD2F27b5a',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-ust-1eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['UST', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
      'ALGO_STABLE',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
    createdAt: 1631282733,
  },
  {
    id: 'sushi-one-1wbtc-1eth',
    name: '1WBTC-1ETH LP',
    token: '1WBTC-1ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x39bE7c95276954a6f7070F9BAa38db2123691Ed0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiWBTC-ETH',
    earnedTokenAddress: '0x8B1Ca7f3F0838dCd23DA8CFe223eA313739193cb',
    earnContractAddress: '0x8B1Ca7f3F0838dCd23DA8CFe223eA313739193cb',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1wbtc-1eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['WBTC', 'ETH'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '.01%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x6983D1E6DEf3690C4d616b13597A09e6193EA013/0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x6983D1E6DEf3690C4d616b13597A09e6193EA013&outputCurrency=0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
    createdAt: 1631283021,
  },
  {
    id: 'sushi-one-1usdt-1usdc',
    name: '1USDT-1USDC LP',
    token: '1USDT-1USDC LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x0c51171b913Db10ade3fd625548E69C9C63aFb96',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDT-USDC',
    earnedTokenAddress: '0x3ECD8Ec6BD954261397E77FD5792482Adaf2a387',
    earnContractAddress: '0x3ECD8Ec6BD954261397E77FD5792482Adaf2a387',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1usdt-1usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['USDT', 'USDC'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0x985458E523dB3d53125813eD68c274899e9DfAb4/0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x985458E523dB3d53125813eD68c274899e9DfAb4&outputCurrency=0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
    createdAt: 1631283436,
  },
  {
    id: 'sushi-one-1usdt-wone',
    name: '1USDT-ONE LP',
    token: '1USDT-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x2c7862b408bb3DBFF277110FFdE1B4EAa45C692a',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDT-ONE',
    earnedTokenAddress: '0x800A8fe2BE01cef25B5950cca56B954312049924',
    earnContractAddress: '0x800A8fe2BE01cef25B5950cca56B954312049924',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-1usdt-wone',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['USDT', 'ONE'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
    createdAt: 1631283673,
  },
  {
    id: 'sushi-one-sushi-one-eol',
    name: 'SUSHI-ONE LP',
    token: 'SUSHI-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x468dc50884962D6F81733aC0c23c04611aC219F9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiSUSHI-ONE',
    earnedTokenAddress: '0xed2E740a34dDF272F54547d56147c5CE4ba75BD0',
    earnContractAddress: '0xed2E740a34dDF272F54547d56147c5CE4ba75BD0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-sushi-one',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    platform: 'SushiSwap',
    assets: ['SUSHI', 'ONE'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A',
    createdAt: 1631197145,
    retiredReason: 'tvl',
  },
  {
    id: 'sushi-one-busd-one',
    name: 'BUSD-ONE LP',
    token: 'BUSD-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x8c36Ede15c5E4B0E1f9764351a7A7A0037c5e103',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiBUSD-ONE',
    earnedTokenAddress: '0x7c7B7FbccA5699175003ecbe1B41E79F40385469',
    earnContractAddress: '0x7c7B7FbccA5699175003ecbe1B41E79F40385469',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-busd-one',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['BUSD', 'ONE'],
    withdrawalFee: '0%',
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0xe176ebe47d621b984a73036b9da5d834411ef734',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xe176ebe47d621b984a73036b9da5d834411ef734',
    createdAt: 1631201665,
  },
  {
    id: 'sushi-one-bscbusd-busd',
    name: 'BUSD-bscBUSD LP',
    token: 'BUSD-bscBUSD LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xDA64F9053A971531a75071A729A6432FB65ed60D',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiBUSD-bscBUSD',
    earnedTokenAddress: '0xc34b9c9DBB39Be0Ef850170127A7b4283484f804',
    earnContractAddress: '0xc34b9c9DBB39Be0Ef850170127A7b4283484f804',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-bscbusd-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['BUSD', 'bscBUSD'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.sushi.com/add/0xe176ebe47d621b984a73036b9da5d834411ef734/0x0ab43550a6915f9f67d0c454c2e90385e6497eaa',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xe176ebe47d621b984a73036b9da5d834411ef734&outputCurrency=0x0ab43550a6915f9f67d0c454c2e90385e6497eaa',
    createdAt: 1631204933,
  },
  {
    id: 'sushi-one-eth-one',
    name: '1ETH-ONE LP',
    token: '1ETH-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xeb049F1eD546F8efC3AD57f6c7D22F081CcC7375',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiETH-ONE',
    earnedTokenAddress: '0xF439B695bB28c9E9865170C1b3e98F5EB4cE9b48',
    earnContractAddress: '0xF439B695bB28c9E9865170C1b3e98F5EB4cE9b48',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-eth-one',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['ETH', 'ONE'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x6983d1e6def3690c4d616b13597a09e6193ea013',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0x6983d1e6def3690c4d616b13597a09e6193ea013',
    createdAt: 1631205117,
  },
  {
    id: 'sushi-one-btc-one',
    name: '1WBTC-ONE LP',
    token: '1WBTC-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xc3670b927eF42eed252e483e2446352C238D9905',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiBTC-ONE',
    earnedTokenAddress: '0xcBd801AAdd138560b15DBFE0D173ea4774E20b40',
    earnContractAddress: '0xcBd801AAdd138560b15DBFE0D173ea4774E20b40',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-btc-one',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['WBTC', 'ONE'],
    callFee: 0.25,
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '.01%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x3095c7557bcb296ccc6e363de01b760ba031f2d9',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0x3095c7557bcb296ccc6e363de01b760ba031f2d9',
    createdAt: 1631205541,
  },
  {
    id: 'sushi-one-usdc-one',
    name: '1USDC-ONE LP',
    token: '1USDC-ONE LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xBf255d8c30DbaB84eA42110EA7DC870F01c0013A',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDC-ONE',
    earnedTokenAddress: '0xB6Fb58eea08b5539f371A744bb9Ef86283F1B3c2',
    earnContractAddress: '0xB6Fb58eea08b5539f371A744bb9Ef86283F1B3c2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-one-usdc-one',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    assets: ['USDC', 'ONE'],
    callFee: 0.25,
    withdrawalFee: '0%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x985458e523db3d53125813ed68c274899e9dfab4',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=&outputCurrency=0x985458e523db3d53125813ed68c274899e9dfab4',
    createdAt: 1631205683,
  },
];
