import { useContext } from "react";
import { AppContext } from "@/pages/_app";

const Child2 = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-[500px] bg-red-400">
            Child2<div>{children}</div>
        </div>
    );
};

export default Child2;
