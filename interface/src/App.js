import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from './components/Navbar';
import Balances from './components/Balances';
import Transactions from './pages/Transactions';
import Transfer from './pages/Transfer';
import Yield from './pages/Yield';
import Faucet from './pages/Faucet';

export const umbros = {
  id: 6_907_316,
  name: 'Umbros',
  network: 'Umbros',
  nativeCurrency: {
    decimals: 18,
    name: 'UMB',
    symbol: 'UMB',
  },
  rpcUrls: {
    public: { http: ['https://avail.tryscatter.xyz'] },
    default: { http: ['https://avail.tryscatter.xyz'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
}

const { chains, publicClient } = configureChains(
  [{
    ...umbros,
    iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/chain-registry/main/devnet/umbros_1188624-1/logos/umbros_1188624-1.svg'
  }],
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
