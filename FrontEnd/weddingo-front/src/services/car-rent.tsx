import axios from "axios";
import { BASE_URL } from "../utils/config";

export class CarRentService {
  static getCarRent = async (): any => {
    try {
      const response = await axios.get(`${BASE_URL}/car-rent`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

  static getCarRentById = async (id): any => {
    try {
      const response = await axios.get(`${BASE_URL}/car-rent/${id}`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

}
