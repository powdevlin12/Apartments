import IService from "./Service";

interface IRoom {
  image: string[];
  name: string;
  price: number;
  bed: number;
  maxPeople: number;
  status?: "free" | "busy";
  service: IService[];
  utilities?: string[];
}

export default IRoom;
