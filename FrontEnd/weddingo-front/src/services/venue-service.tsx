import axios from "axios";
import { BASE_URL } from "../utils/config";

export class VenueService {
  static getVenue = async (): any => {
    try {
      const response = await axios.get(`${BASE_URL}/api/venues`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };

  static getVenueById = async (id): any => {
    try {
      const response = await axios.get(`${BASE_URL}/api/venues/${id}`);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('There was an error getting the data!', error);
      throw error; 
    }
  };
}
