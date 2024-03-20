import { useSite } from "./context/Context";
function Random() {
    const { word } = useSite();
    return (<div className="kelime">
      Kelime: <b>{word}</b>
    </div>);
}
export default Random;
