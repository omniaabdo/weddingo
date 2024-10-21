import axios from "axios";
import { BASE_URL } from "../utils/config";

export class StoreService {
  static getStore = async (): any => {
    try {
      const response = await axios.get(`${BASE_URL}/home-store`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

  static getStoreById = async (id): any => {
    try {
      const response = await axios.get(`${BASE_URL}/home-store/${id}`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

}
