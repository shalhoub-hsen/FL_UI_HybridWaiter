import { IService } from "models/IService";
import { http } from "utils/http";

const getServicesList = async () => {
  return await http.get<IService[], any>("ServiceList");
};

const ServiceListServices = {
  getServicesList,
};

export default ServiceListServices;
