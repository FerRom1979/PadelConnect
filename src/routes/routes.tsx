import React from "react";
import { Login } from "../Pages/Login";
import { CreateAccount } from "../Pages/CreateAccount";

export const Routes = [
  {
    index: true,
    element: <Login />,
  },
  {
    path: "createAccount",
    element: <CreateAccount />,
  },
];
