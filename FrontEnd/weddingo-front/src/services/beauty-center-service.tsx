import axios from "axios";
import { BASE_URL } from "../utils/config";

export class BeautyCenterService {
  static getBeautyCenter = async (): any => {
    try {
      const response = await axios.get(`${BASE_URL}/beauty-center`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

  static getBeautyCenterById = async (id): any => {
    try {
      const response = await axios.get(`${BASE_URL}/beauty-center/${id}`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };
}
