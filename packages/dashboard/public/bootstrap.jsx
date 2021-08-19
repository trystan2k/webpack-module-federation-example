import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "@mfes/shared-library";

import DashboardPage from "../src/DashboardPage";

ReactDOM.render(<AuthProvider><DashboardPage /></AuthProvider>, document.getElementById("root"));