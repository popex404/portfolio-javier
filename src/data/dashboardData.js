export const CHAIN_CONFIG = {
  Solana:     { color: '#9945FF', bg: 'rgba(153,69,255,0.12)',  border: 'rgba(153,69,255,0.35)' },
  Avalanche:  { color: '#FF0060', bg: 'rgba(255,0,96,0.12)',    border: 'rgba(255,0,96,0.35)'   },
  Ethereum:   { color: '#627EEA', bg: 'rgba(98,126,234,0.12)',  border: 'rgba(98,126,234,0.35)' },
  NEAR:       { color: '#00D4AA', bg: 'rgba(0,212,170,0.12)',   border: 'rgba(0,212,170,0.35)'  },
  BSC:        { color: '#F0B90B', bg: 'rgba(240,185,11,0.12)',  border: 'rgba(240,185,11,0.35)' },
  Base:       { color: '#0052FF', bg: 'rgba(0,82,255,0.12)',    border: 'rgba(0,82,255,0.35)'   },
  Cosmos:     { color: '#6F2FD1', bg: 'rgba(111,47,209,0.12)', border: 'rgba(111,47,209,0.35)' },
  Algorand:   { color: '#00C891', bg: 'rgba(0,200,145,0.12)',  border: 'rgba(0,200,145,0.35)'  },
  'Terra Luna':{ color: '#0077FF', bg: 'rgba(0,119,255,0.12)', border: 'rgba(0,119,255,0.35)'  },
  Flow:       { color: '#00EF8B', bg: 'rgba(0,239,139,0.12)',  border: 'rgba(0,239,139,0.35)'  },
  Optimism:   { color: '#FF0420', bg: 'rgba(255,4,32,0.12)',   border: 'rgba(255,4,32,0.35)'   },
  Arbitrum:   { color: '#28A0F0', bg: 'rgba(40,160,240,0.12)', border: 'rgba(40,160,240,0.35)' },
  Evmos:      { color: '#E646A0', bg: 'rgba(230,70,160,0.12)', border: 'rgba(230,70,160,0.35)' },
  Aurora:     { color: '#78DC50', bg: 'rgba(120,220,80,0.12)', border: 'rgba(120,220,80,0.35)' },
  Covalent:   { color: '#DC5A00', bg: 'rgba(220,90,0,0.12)',  border: 'rgba(220,90,0,0.35)'   },
}

// Platform that provided the data
export const PLATFORM_CONFIG = {
  Flipside: { label: 'Flipside Crypto', color: '#DDDDDD' },
  Covalent: { label: 'CovalentHQ',      color: '#DC5A00' },
  MetricsDAO:{ label: 'MetricsDAO',     color: '#1E6EC8' },
}

// Main analyses — curated selection
export const ANALYSES = [
  // BSC
  { id: 16, title: 'NFTrade en Binance Smart Chain — Performance 2022', chains: ['BSC'], platform: 'Covalent', date: 'Nov 28, 2022', tweetCount: 18, hasMedia: true, url: 'https://x.com/Popex404/status/1597048009128542208' },
  // Ethereum
  { id: 30, title: 'Blur Marketplace vs Competidores NFT en Ethereum', chains: ['Ethereum'], platform: 'Flipside', date: 'Dec 10, 2022', tweetCount: 5, hasMedia: true, url: 'https://x.com/Popex404/status/1601440817302089728' },
  { id: 40, title: 'CryptoZoo en Ethereum — Análisis del Token de Logan Paul', chains: ['Ethereum'], platform: 'Flipside', date: 'Dec 20, 2022', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1605030305928077312' },
  { id: 78, title: 'Votación de Gobernanza en Aave — Tendencias 2023', chains: ['Ethereum'], platform: 'Flipside', date: 'Mar 23, 2023', tweetCount: 2, hasMedia: false, url: 'https://x.com/Popex404/status/1638748137664675843' },
  { id: 79, title: 'Colapso de Harvest Keeper — Bot de Trading IA', chains: ['Ethereum'], platform: 'Flipside', date: 'Mar 23, 2023', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1638750624681537536' },
  { id: 93, title: 'Memecoins en Uniswap V2 — Primeras Liquidity Pools', chains: ['Ethereum'], platform: 'Flipside', date: 'May 16, 2023', tweetCount: 2, hasMedia: false, url: 'https://x.com/Popex404/status/1658419983968354307' },
  { id: 103, title: 'UwU Lend — Protocolo de Préstamos en Ethereum', chains: ['Ethereum'], platform: 'Covalent', date: 'Jul 12, 2023', tweetCount: 2, hasMedia: false, url: 'https://x.com/Popex404/status/1678931163665035264' },
  // Base
  { id: 82, title: 'Coinbase Base Testnet — 500K Usuarios Analizados', chains: ['Base'], platform: 'Flipside', date: 'Mar 25, 2023', tweetCount: 4, hasMedia: false, url: 'https://x.com/Popex404/status/1639441805467959300' },
  // Solana
  { id: 33, title: 'Solana de Noche — Análisis Post-Colapso de FTX', chains: ['Solana'], platform: 'Flipside', date: 'Dec 15, 2022', tweetCount: 11, hasMedia: true, url: 'https://x.com/Popex404/status/1603223538416209923' },
  { id: 80, title: 'BlazeStake — Récord de Actividad en Enero 2023', chains: ['Solana'], platform: 'Flipside', date: 'Mar 23, 2023', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1638751551627104256' },
  { id: 104, title: 'BlazeStake Airdrop — Análisis del Aumento de Actividad', chains: ['Solana'], platform: 'Flipside', date: 'Jul 17, 2023', tweetCount: 6, hasMedia: true, url: 'https://x.com/Popex404/status/1680891956883345408' },
  { id: 122, title: 'Shadow Drive de GenesysGo — Analytics de Almacenamiento', chains: ['Solana'], platform: 'Flipside', date: 'Aug 02, 2023', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1686764020873703425' },
  { id: 127, title: 'BlazeStake Post-Airdrop — Actividad del Protocolo en Julio', chains: ['Solana'], platform: 'Flipside', date: 'Aug 07, 2023', tweetCount: 5, hasMedia: false, url: 'https://x.com/Popex404/status/1688552814589444096' },
  { id: 137, title: 'BlazeStake — Key Takeaways del Informe Completo', chains: ['Solana'], platform: 'Flipside', date: 'Oct 27, 2023', tweetCount: 6, hasMedia: true, url: 'https://x.com/Popex404/status/1717967543464264167' },
  // Avalanche
  { id: 77, title: 'BTC.b en Avalanche — Bitcoin Puenteado al Ecosistema', chains: ['Avalanche'], platform: 'Flipside', date: 'Mar 16, 2023', tweetCount: 7, hasMedia: false, url: 'https://x.com/Popex404/status/1636156160603553794' },
  { id: 98, title: '0xCampfire — Desempeño 2023 en Avalanche', chains: ['Avalanche'], platform: 'Covalent', date: 'Jul 04, 2023', tweetCount: 7, hasMedia: false, url: 'https://x.com/Popex404/status/1676120733166993409' },
  { id: 101, title: 'Trader Joe 2do Aniversario — Analytics de $JOE', chains: ['Avalanche'], platform: 'Flipside', date: 'Jul 06, 2023', tweetCount: 4, hasMedia: false, url: 'https://x.com/Popex404/status/1676800109919498241' },
  { id: 107, title: 'Uniswap V3 en Avalanche — Key Takeaways y Liquidez', chains: ['Avalanche'], platform: 'Flipside', date: 'Jul 19, 2023', tweetCount: 10, hasMedia: true, url: 'https://x.com/Popex404/status/1681494846077386753' },
  { id: 113, title: 'Struct Finance — Dashboard Completa de Vaults', chains: ['Avalanche'], platform: 'Flipside', date: 'Jul 26, 2023', tweetCount: 1, hasMedia: false, url: 'https://x.com/Popex404/status/1684103936876089346' },
  { id: 119, title: 'Struct Finance — Análisis Completo de Vaults', chains: ['Avalanche'], platform: 'Flipside', date: 'Aug 01, 2023', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1686279856038776832' },
  { id: 129, title: 'BTC.b Extendido — Análisis Profundo del Bridge de Bitcoin', chains: ['Avalanche'], platform: 'Flipside', date: 'Aug 09, 2023', tweetCount: 10, hasMedia: false, url: 'https://x.com/Popex404/status/1689138726637617152' },
  { id: 131, title: 'Hack de Steadefi — Análisis del Ataque Malicioso', chains: ['Avalanche', 'Arbitrum'], platform: 'Flipside', date: 'Aug 16, 2023', tweetCount: 7, hasMedia: false, url: 'https://x.com/Popex404/status/1691774187742916843' },
  { id: 135, title: 'Struct Finance — Tracker de Actividad de Usuarios', chains: ['Avalanche'], platform: 'Flipside', date: 'Oct 23, 2023', tweetCount: 1, hasMedia: false, url: 'https://x.com/Popex404/status/1716253603936059852' },
  { id: 138, title: 'Struct Finance — Descubriendo el Crecimiento del Proyecto', chains: ['Avalanche'], platform: 'Flipside', date: 'Oct 30, 2023', tweetCount: 4, hasMedia: true, url: 'https://x.com/Popex404/status/1719042620138160219' },
  { id: 142, title: 'Struct Finance — Dashboard de Reclamación de Rendimientos', chains: ['Avalanche'], platform: 'Flipside', date: 'Dec 05, 2023', tweetCount: 2, hasMedia: false, url: 'https://x.com/Popex404/status/1732084534085091626' },
  // NEAR
  { id: 39, title: 'El Mayor Swapper de NEAR — Investigación de Whale Activity', chains: ['NEAR'], platform: 'Flipside', date: 'Dec 18, 2022', tweetCount: 6, hasMedia: true, url: 'https://x.com/Popex404/status/1604363393653043201' },
  { id: 65, title: 'Reporte Electric Capital 2022 — Datos de Desarrolladores NEAR', chains: ['NEAR'], platform: 'Flipside', date: 'Jan 25, 2023', tweetCount: 7, hasMedia: false, url: 'https://x.com/Popex404/status/1618084708130381825' },
  { id: 86, title: 'Jumbo Exchange en NEAR — Overview del Protocolo', chains: ['NEAR'], platform: 'Flipside', date: 'Apr 13, 2023', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1646366581465706497' },
  { id: 88, title: 'Supply de NEAR — Seguimiento desde 2021', chains: ['NEAR'], platform: 'Flipside', date: 'Apr 20, 2023', tweetCount: 4, hasMedia: false, url: 'https://x.com/Popex404/status/1648882311428034560' },
  { id: 91, title: 'Actividad de CEX en NEAR — Análisis Completo', chains: ['NEAR'], platform: 'Flipside', date: 'May 04, 2023', tweetCount: 4, hasMedia: false, url: 'https://x.com/Popex404/status/1653977876675346436' },
  { id: 95, title: 'Proyectos Más Activos de NEAR Protocol — Evolución 2021–2023', chains: ['NEAR'], platform: 'Flipside', date: 'Jun 26, 2023', tweetCount: 4, hasMedia: false, url: 'https://x.com/Popex404/status/1673172424127291392' },
  { id: 97, title: 'Near Social — Crecimiento de la Red Social Descentralizada', chains: ['NEAR'], platform: 'Flipside', date: 'Jun 30, 2023', tweetCount: 6, hasMedia: false, url: 'https://x.com/Popex404/status/1674683278538809344' },
  { id: 100, title: 'NEAR Foundation + Alibaba Cloud — Análisis de la Asociación', chains: ['NEAR'], platform: 'Flipside', date: 'Jul 05, 2023', tweetCount: 11, hasMedia: false, url: 'https://x.com/Popex404/status/1676721861785272323' },
  { id: 117, title: 'NEAR Foundation — Estrategia BOS y Estado del Ecosistema', chains: ['NEAR'], platform: 'Flipside', date: 'Jul 31, 2023', tweetCount: 13, hasMedia: false, url: 'https://x.com/Popex404/status/1685846971301457920' },
  { id: 136, title: 'Jumbo Exchange — Salud del Proyecto en Bear Market 2023', chains: ['NEAR'], platform: 'Flipside', date: 'Oct 23, 2023', tweetCount: 3, hasMedia: true, url: 'https://x.com/Popex404/status/1716263816344805560' },
  // Cosmos
  { id: 34, title: 'Cosmos Open Analytics — Primera Dashboard en la Red Cosmos', chains: ['Cosmos'], platform: 'Flipside', date: 'Dec 15, 2022', tweetCount: 2, hasMedia: false, url: 'https://x.com/Popex404/status/1603230422057553922' },
  // Algorand
  { id: 35, title: 'FIFA+ Collect en Algorand — Dashboard Completa', chains: ['Algorand'], platform: 'Flipside', date: 'Dec 15, 2022', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1603237960215846912' },
  // Terra Luna
  { id: 37, title: 'TerraDash Parte 2 — Supply, Staking y Bridging de LUNA', chains: ['Terra Luna'], platform: 'Flipside', date: 'Dec 15, 2022', tweetCount: 1, hasMedia: false, url: 'https://x.com/Popex404/status/1603244823590363137' },
  // Flow
  { id: 84, title: 'Flow Blockchain — Contratos Inteligentes y Gas Usage', chains: ['Flow'], platform: 'Flipside', date: 'Mar 30, 2023', tweetCount: 3, hasMedia: true, url: 'https://x.com/Popex404/status/1641258110651183105' },
  { id: 87, title: 'Flow — Actividad y Retención de Usuarios', chains: ['Flow'], platform: 'Flipside', date: 'Apr 15, 2023', tweetCount: 3, hasMedia: false, url: 'https://x.com/Popex404/status/1647086321381302272' },
  { id: 90, title: 'Flow Blockchain — Actividad de Gobernanza', chains: ['Flow'], platform: 'Flipside', date: 'Apr 22, 2023', tweetCount: 6, hasMedia: false, url: 'https://x.com/Popex404/status/1649626097464508418' },
  // Evmos / Aurora
  { id: 94, title: 'Solana vs Ethereum — Comparación Cross-chain 2023', chains: ['Evmos', 'Aurora'], platform: 'Covalent', date: 'Jun 20, 2023', tweetCount: 5, hasMedia: false, url: 'https://x.com/Popex404/status/1671007573569306630' },
  { id: 96, title: 'Covalent Data Alchemist — Desafío Semana 2 en Evmos', chains: ['Evmos'], platform: 'Covalent', date: 'Jun 27, 2023', tweetCount: 1, hasMedia: false, url: 'https://x.com/Popex404/status/1673569825631744002' },
]

// Full dashboard screenshots
const base = import.meta.env.BASE_URL
export const FULL_DASHBOARDS = [
  { id: 43, title: 'Uniswap NFT Aggregator — Análisis del Agregador de marketplaces NFTs de Uniswap', chains: ['Ethereum'], platform: 'Flipside', date: 'Dec 21, 2022', url: 'https://x.com/Popex404/status/1605640423308988448', image: `${base}dashboards/uniswap-nft.jpg` },
  { id: 44, title: 'TerraDash — Smart Contracts Populares en Terra', chains: ['Terra Luna'], platform: 'Flipside', date: 'Dec 22, 2022', url: 'https://x.com/Popex404/status/1605757359208423425', image: `${base}dashboards/terradash.jpg` },
  { id: 45, title: 'Staking en Solana — Revisión de Protocolos LST', chains: ['Solana'], platform: 'Flipside', date: 'Dec 24, 2022', url: 'https://x.com/Popex404/status/1606447953526374402', image: `${base}dashboards/staking-solana.jpg` },
  { id: 46, title: 'Optimism $OP — Drivers del Cambio de Precio', chains: ['Optimism'], platform: 'Flipside', date: 'Dec 24, 2022', url: 'https://x.com/Popex404/status/1606512806517510144', image: `${base}dashboards/op-price.jpg` },
  { id: 51, title: 'New Year New Luna — Análisis Terra para el Año Nuevo', chains: ['Terra Luna'], platform: 'Flipside', date: 'Jan 12, 2023', url: 'https://x.com/Popex404/status/1613355271543459840', image: `${base}dashboards/new-year-new-luna.jpg` },
  { id: 52, title: 'Reporte de Transparencia de NEAR — Mejoras Propuestas', chains: ['NEAR'], platform: 'Flipside', date: 'Jan 12, 2023', url: 'https://x.com/Popex404/status/1613362417571962880', image: `${base}dashboards/near-protocol-report.jpg` },
  { id: 54, title: 'Address Poisoning en MetaMask — Investigación Ethereum', chains: ['Ethereum'], platform: 'Flipside', date: 'Jan 13, 2023', url: 'https://x.com/Popex404/status/1613915687772385280', image: `${base}dashboards/address-poisoning.jpg` },
  { id: 55, title: 'Orca Whirlpools en Solana — Preview de Dashboard', chains: ['Solana'], platform: 'Flipside', date: 'Jan 14, 2023', url: 'https://x.com/Popex404/status/1614123638583615488', image: `${base}dashboards/orca.jpg` },
  { id: 62, title: 'El Flippening — Arbitrum vs Optimism en Ethereum', chains: ['Ethereum'], platform: 'Flipside', date: 'Jan 21, 2023', url: 'https://x.com/Popex404/status/1616655073542553602', image: `${base}dashboards/flippening.jpg` },
]

// Social proof tweets
export const SPECIALS = [
  {
    id: 24,
    source: '@MetricsDAO',
    text: 'To check out an NFT project @JavierG30539035 built a @flipsidecrypto dashboard. By showing mints and sales he concluded it\'s not being used much. Great analysis!',
    url: 'https://x.com/Popex404/status/1600587141083500557',
    chain: 'Ethereum',
  },
  {
    id: 110,
    source: '@solblaze_org',
    text: 'Check out this detailed and high-quality analysis from @Popex404 about BlazeStake\'s growth!',
    url: 'https://x.com/Popex404/status/1681504657875632132',
    chain: 'Solana',
  },
]
