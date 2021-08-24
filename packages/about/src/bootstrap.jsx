import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "@mfes/shared-library";

import AboutPage from "./AboutPage";

ReactDOM.render(<AuthProvider><AboutPage /></AuthProvider>, document.getElementById("root"));
