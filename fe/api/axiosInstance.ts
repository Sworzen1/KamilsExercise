import Axios, { AxiosError } from "axios";

import { showErrorToast } from "@/utils/showToast";

const SECOND_IN_MS = 1000;

type ApiErrorType = {
  error: string;
  errorMessage: string;
  statusCode: number;

  errors: never;
};

type FormErrorType = {
  errors?: {
    [key: string]: string[];
  };
  statusCode: number;

  error: never;
  errorMessage: never;
};

export type ApiError = ApiErrorType | FormErrorType;

export const baseURL = "http://localhost:3000";

export const AXIOS_INSTANCE = Axios.create({
  baseURL,
  timeout: 10 * SECOND_IN_MS,
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

AXIOS_INSTANCE.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError<ApiError>) => {
    const formErrors = error?.response?.data?.errors;
    const errorMessage = error?.response?.data?.errorMessage;

    if (errorMessage) {
      showErrorToast({ description: errorMessage });
    }

    if (formErrors) {
      throw formErrors;
    }

    return Promise.reject(new Error("Something went wrong"));
  },
);
