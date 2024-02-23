import React, { useState } from 'react';
import './NFTForm.css';
import NFTService from '../services/NFTService';
import NFTResult from './NFTResult';

const NFTForm: React.FC = () => {
    const [contractNumber, setContractNumber] = useState('');
    const [nftId, setNFTId] = useState('');
    const [nftData, setNFTData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await NFTService.getData(contractNumber, nftId);
        setNFTData(response);
        setError(null);
        setContractNumber('');
        setNFTId('');
      } catch (error) {
        setError('NFT not found');
        setNFTData(null);
        setContractNumber('');
        setNFTId('');
      }
    };
  
    return (
        <>
        <div className='main-container'>
          <h2>Fetch NFT Data</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Contract Address</label>
                <input type="text" value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
            </div>
            <div>
            <label>NFT ID</label>
                <input type="text" value={nftId} onChange={(e) => setNFTId(e.target.value)} />
            </div>
            <button type="submit">Fetch Data</button>
          </form>
        </div>
        <NFTResult nftData={nftData} error={error} />
      </>
    );
  };
  
  export default NFTForm;