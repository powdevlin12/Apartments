import IService from "./Service";
import TypeRoom from "./TypeRoom";
import { IUtilities } from "./Utilities";

interface IRoom {
  _id: string;
  images: string[];
  name: string;
  price: number;
  bed: number;
  max_people: number;
  status: "free" | "busy";
  service?: IService[];
  utilities?: IUtilities[];
  typeApartment: TypeRoom[];
}

export default IRoom;
