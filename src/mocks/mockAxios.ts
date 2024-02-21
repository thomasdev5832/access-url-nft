interface NFTData {
    name: string;
    description: string;
    image: string;
  }
  
const mockData: { [key: string]: NFTData } = {
    '123456:123': {
      name: 'NFT 123',
      description: 'Description of NFT 123',
      image: 'https://example.com/nft/123.png'
    },
    '123457:124': {
      name: 'NFT 124',
      description: 'Description of NFT 124',
      image: 'https://example.com/nft/124.png'
    },
    '123458:125': {
      name: 'NFT 125',
      description: 'Description of NFT 125',
      image: 'https://example.com/nft/125.png'
    },
    '123459:126': {
      name: 'NFT 126',
      description: 'Description of NFT 126',
      image: 'https://example.com/nft/126.png'
    },
    '123460:127': {
      name: 'NFT 127',
      description: 'Description of NFT 127',
      image: 'https://example.com/nft/127.png'
    },
    '123461:128': {
      name: 'NFT 128',
      description: 'Description of NFT 128',
      image: 'https://example.com/nft/128.png'
    },
    '123462:129': {
      name: 'NFT 129',
      description: 'Description of NFT 129',
      image: 'https://example.com/nft/129.png'
    },
    '123463:130': {
      name: 'NFT 130',
      description: 'Description of NFT 130',
      image: 'https://example.com/nft/130.png'
    },
    '123464:131': {
      name: 'NFT 131',
      description: 'Description of NFT 131',
      image: 'https://example.com/nft/131.png'
    },
    '123465:132': {
      name: 'NFT 132',
      description: 'Description of NFT 132',
      image: 'https://example.com/nft/132.png'
    }
};
  
const mock = {
    getData: (contractNumber: string, nftId: string): Promise<NFTData> => {
      return new Promise((resolve, reject) => {
        const key = `${contractNumber}:${nftId}`;
        const nftData = mockData[key];
        
        if (nftData) {
          resolve(nftData);
        } else {
          reject(new Error('NFT not found'));
        }
      });
    }
};
  
export default mock;
  