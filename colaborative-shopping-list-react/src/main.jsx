import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes";
import './App.css'
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  </BrowserRouter>
);
