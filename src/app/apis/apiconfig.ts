const baseUrl = "http://localhost:8000";
export const createUserUrl = baseUrl + "/user";
export const updateUserUrl = baseUrl + "/user/{userId}";
export const loginUrl = baseUrl + "/authentication/generateToken";
export const resetPasswordUrl = baseUrl + "/forgotPassword?username=";
export const userDetailsGetUrl = baseUrl + "/user/{userId}";
export const userAppointmentsGetUrl = baseUrl + "/user/{userId}/appointments";
export const userHospitalsGetUrl = baseUrl + "/user/{userId}/hospitals";
export const addHospitalToUserUrl = baseUrl + "/user/{userId}/hospital";