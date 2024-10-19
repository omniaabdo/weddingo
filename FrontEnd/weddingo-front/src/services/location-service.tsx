import axios from "axios";
import { BASE_URL } from "../utils/config";

export class LocationService {
  static getLocation = async (): any => {
    try {
      const response = await axios.get(`${BASE_URL}/location`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

  static getLocationById = async (id): any => {
    try {
      const response = await axios.get(`${BASE_URL}/Location/${id}`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };
}
