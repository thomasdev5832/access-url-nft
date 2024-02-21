import React from 'react';
import './NFTResult.css';

interface NFTData {
  name: string;
  description: string;
  image: string;
}

interface Props {
  nftData: NFTData | null;
  error: string | null;
}

const NFTResult: React.FC<Props> = ({ nftData, error }) => {
  return (
    <div className='result-container'>
      {error && <p className='text-error'>{error}</p>}
      {nftData && (
        <div>
          <h3>NFT Data</h3>
          <p>Name: {nftData.name}</p>
          <p>Description: {nftData.description}</p>
          <p>Image: {nftData.image}</p>
        </div>
      )}
    </div>
  );
};

export default NFTResult;
