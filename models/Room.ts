import IService from "./Service";

interface IRoom {
  image: string[];
  name: string;
  price: number;
  bed: number;
  maxPeople: number;
  service: IService[];
  utilities?: string[];
}

export default IRoom;
