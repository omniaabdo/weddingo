import axios from "axios";
import { BASE_URL } from "../utils/config";

export class PhotographerService {
  static getPhotographer = async (): any => {
    try {
      const response = await axios.get(`${BASE_URL}/photographer`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

}
