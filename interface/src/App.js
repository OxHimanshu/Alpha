import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrumGoerli,
  filecoinCalibration,
  scrollSepolia,
  celoAlfajores,
  baseGoerli,
  mantleTestnet,
  polygonZkEvmTestnet
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from './components/Navbar';
import Balances from './components/Balances';
import Transactions from './pages/Transactions';
import Transfer from './pages/Transfer';
import Yield from './pages/Yield';
import Faucet from './pages/Faucet';

export const polygonMumbai = {
  id: 80_001,
  name: 'Polygon',
  network: 'polygon',
  nativeCurrency: {
    decimals: 18,
    name: 'Polygon',
    symbol: 'MATIC',
  },
  rpcUrls: {
    public: { http: ['https://rpc-mumbai.maticvigil.com'] },
    default: { http: ['https://rpc-mumbai.maticvigil.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://mumbai.polygonscan.com' },
    default: { name: 'SnowTrace', url: 'https://mumbai.polygonscan.com' },
  },
} 

export const okxX1 = {
  id: 195,
  name: 'X1 testnet',
  network: 'X1 testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'OKB',
    symbol: 'OKB',
  },
  rpcUrls: {
    public: { http: ['https://testrpc.x1.tech'] },
    default: { http: ['https://testrpc.x1.tech'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://www.oklink.com/x1-test' },
    default: { name: 'SnowTrace', url: 'https://www.oklink.com/x1-test' },
  },
} 

const { chains, publicClient } = configureChains(
  [polygonMumbai, 
  // arbitrumGoerli, 
  {
    ...filecoinCalibration,
    iconUrl: 'https://imgs.search.brave.com/z7Q4liNUN62zLO3k11oOtRvFEPgBlueAr8IQrbt0sjU/rs:fit:40:40:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY29pbmdlY2tv/LmNvbS9jb2lucy9p/bWFnZXMvMTI4MTcv/bGFyZ2UvZmlsZWNv/aW4ucG5nPzE2OTY1/MTI2MDk'
  }, 
  {
    ...scrollSepolia,
    iconUrl: 'https://app.nfts2me.com/assets/chains/scrollv2.svg',
  }, 
  {
    ...celoAlfajores,
    iconUrl: 'https://imgs.search.brave.com/Oi5N3WOCeTxMjR6bvBH0WYp2GNNAKVU1XSBsrShuT1o/rs:fit:40:40:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY29pbmdlY2tv/LmNvbS9jb2lucy9p/bWFnZXMvMTEwOTAv/bGFyZ2UvSW5qWEJO/eDlfNDAweDQwMC5q/cGc_MTY5NjUxMTAz/MQ',
  },
  // baseGoerli, 
  {
    ...mantleTestnet, 
    iconUrl: 'https://miro.medium.com/v2/0*w-6d4VpYha0olTgb.jpg',
  },
  {
    ...polygonZkEvmTestnet,
    iconUrl: 'https://zkevm.polygonscan.com/images/svg/brands/mainbrand-1.svg?v=23.10.2.0',
  },
  {
    ...okxX1,
    iconUrl:'https://static.oklink.com/cdn/assets/imgs/233/7E3D44D659CE5A9C.png?x-oss-process=image/format,webp/resize,w_88,h_88,type_6/ignore-error,1',
  }
],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Alpha',
  projectId: '5f003c980b0077487fe5501454d63922',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="bg-orange-500 w-screen h-screen">
          <Router>
            <Navbar/>  
            <div className='flex justify-between'>
              <div>
                <Routes>
                  <Route path='/' exact element={<Yield/>}/>
                  <Route path='/transfer' exact element={<Transfer/>}/>
                  <Route path='/transactions' exact element={<Transactions/>}/>
                  <Route path='/faucet' exact element={<Faucet/>}/>
                </Routes>
              </div>
              <Balances/>
            </div>
          </Router>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
