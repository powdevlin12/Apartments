import { axiosClient } from "@/configs/lib";
import { BASE_URL_TYPE_APARTMENT } from "@/constants/baseUrl";
import { TypeRoom } from "@/models";

const typeApartmentService = {
  getAll: async (): Promise<TypeRoom[]> => {
    const response = await axiosClient.get(
      `${BASE_URL_TYPE_APARTMENT}/read-all`
    );
    return response.data;
  },
};

export default typeApartmentService;
