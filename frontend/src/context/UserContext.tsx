import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { UserData } from "../types";

export const UserContext = createContext<
  [UserData, Dispatch<SetStateAction<UserData>> | null]
>([
  {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    createdAt:"",
    updatedAt: ""
  },
  null,
]);