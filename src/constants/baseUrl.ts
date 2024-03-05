const MODE: "DEBUG" | "PRODUCT" = "PRODUCT";
export const BASE_URL =
  MODE === "PRODUCT"
    ? "https://apartment-be.onrender.com"
    : "http://localhost:1203";

export const BASE_URL_TYPE_APARTMENT = `${BASE_URL}/type-apartments`;
export const BASE_URL_APARTMENT = `${BASE_URL}/apartments`;
