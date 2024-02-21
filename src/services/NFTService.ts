import axios from 'axios';
import mock from '../mocks/mockAxios';

class NFTService {
  static async getData(contractNumber: string, nftId: string) {
    try {
      const response = await mock.getData(contractNumber, nftId);
      return response;
    } catch (error) {
      throw new Error('NFT not found');
    }
  }
}

export default NFTService;