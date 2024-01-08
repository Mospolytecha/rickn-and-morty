import axios from "axios";
import { API_URL } from "../config/api.config";

export const CharactersService = {
  async getCharactees(page: number = 1) {
    return axios.get(API_URL, {
      params: {
        page,
      },
    });
  },
};
