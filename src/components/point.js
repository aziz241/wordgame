import { useSite } from "./context/Context";
function Point() {
    const { points } = useSite();
    return <div>Puanınız: {points}</div>;
}
export default Point;
