import { useEffect } from "react";
import { useSite } from "./context/Context";
function Form() {
    const main = document.getElementById("root");
    // eslint-disable-this
    const { setControl, word, setPoints, points, input, setInput } = useSite();
    // useEffect(() => {
    //   if (word !== "") {
    //     console.log("Kelime ayarlandı:", word);
    //   }
    // }, [word]);
    useEffect(() => {
        if (input !== "" && input.length <= word[0].length) {
            // const control_user = word.filter((el) => el.includes(input));
            if (word[0].slice(0, input.length) === input) {
                main.style.background = "#c7c6c6";
                main.style.color = "black";
            }
            else {
                main.style.background = "red";
                main.style.color = "white";
            }
            if (word[0] === input) {
                console.log("Kelime Bilindi!");
                main.style.background = "rgb(64, 128, 0)";
                main.style.color = "white";
                setTimeout(() => {
                    setPoints(points + 1);
                    setInput("");
                    setControl(true);
                    main.style.background = "#c7c6c6";
                    main.style.color = "black";
                }, 1000);
            }
        }
        else {
            main.style.background = "#c7c6c6";
            main.style.color = "black";
        } // eslint-disable-next-line
    }, [input]);
    // eslint-disable-next-line
    const onChange = (event) => {
        event.preventDefault();
        if (event.target.value.length === word[0].length + 1) {
            event.target.value = input.slice(0);
        }
        else {
            setInput(event.target.value);
        }
    };
    return (<div id="main">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <input value={input} type="text" onChange={onChange}></input>
      </form>
    </div>);
}
export default Form;
