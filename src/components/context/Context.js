import { createContext, useContext, useState } from "react";
/* eslint-disable */
const Context = createContext({});
export const useSite = () => useContext(Context);
const Provider = ({ children }) => {
    const [word, setWord] = useState("");
    const [control, setControl] = useState(true);
    const [points, setPoints] = useState(0);
    const [input, setInput] = useState("");
    const data = {
        word,
        setWord,
        control,
        setControl,
        points,
        setPoints,
        input,
        setInput,
    };
    return <Context.Provider value={data}>{children}</Context.Provider>;
};
export default Provider;
