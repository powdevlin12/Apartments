import { axiosClient } from "@/configs/lib";
import { BASE_URL_APARTMENT } from "@/constants/baseUrl";
import { IRoom } from "@/models";

const apartmentsService = {
  getAll: async (): Promise<IRoom[]> => {
    const response = await axiosClient.get(`${BASE_URL_APARTMENT}/read-all`);
    return response.data;
  },
};

export default apartmentsService;
