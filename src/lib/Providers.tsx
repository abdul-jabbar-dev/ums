'use client'
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
    </Provider>
  )
}
