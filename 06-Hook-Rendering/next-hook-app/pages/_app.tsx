import "@/styles/globals.css";
import type { AppProps } from "next/app";

// 전역상태 영역생성을 위한 참조
// createContext 함수를 이용해 전역 상태 공간을 app.tsx 컴포넌트에 생성
import { createContext, useState } from "react";

export const AppContext = createContext({
    msg: "",
    setMsg: (msg: string) => {},
});

function MsgProvider({ children }: { children: React.ReactNode }) {
    let [msg, setMsg] = useState("기본값");
    return (
        <AppContext.Provider value={{ msg, setMsg }}>
            {children}
        </AppContext.Provider>
    );
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MsgProvider>
            <Component {...pageProps} />
        </MsgProvider>
    );
}
