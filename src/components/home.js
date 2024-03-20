import Random from "./randomword";
import Form from "./submitform";
import Point from "./point";
import { useEffect } from "react";
import { useSite } from "./context/Context";
function Home() {
    const { control, setWord, setControl } = useSite();
    useEffect(() => {
        if (control) {
            // control true ise yani kelime bilindi ise yeni bir istekle diğer kelime getirilir.
            fetch("https://random-word-api.herokuapp.com/word?lang=en")
                .then((res) => res.json())
                .then((res) => {
                setWord(res);
            });
            setControl(false); // control false yapılır
        }
        // eslint-disable-next-line
    }, [control]); // control değiştiğinde çağırılacak fonksiyon
    return (<>
      <div>
        <Random />
        <Form />
      </div>
      <Point />
    </>);
}
export default Home;
