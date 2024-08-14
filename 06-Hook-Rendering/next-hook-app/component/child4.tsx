import React from "react";
import { AppContext } from "@/pages/_app";

const Child4 = () => {
    const { msg, setMsg } = React.useContext(AppContext);
    return <div className="h-[200px] bg-blue-700">Child4 {msg}</div>;
};

export default Child4;
