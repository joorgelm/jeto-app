import FileInput from "./components/FileInput/FileInput";
import Result from "./components/Result/Result";
import Footer from "./components/Footer/Footer";
import ProgressLoad from "./components/ProgressLoad/ProgressLoad";
import useJeto from "./endpoints/jeto";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const jetoApi = useJeto();
    const dispatch = useDispatch();

    async function sendFile({target}) {
        const [file,] = target.files;
        const {data} = await jetoApi.extract(file, file.name);

        dispatch({type: "SET_CONTENT", content: data});
    }

    const content = useSelector(state => state.content)

    return (
        <div className="App">
            <div>
                <nav>
                    <h1>
                        JETO
                    </h1>
                    <h3>
                        Serviço desenvolvido em Java que tem como objetivo extrair texto de imagens e arquivos pdf
                    </h3>
                </nav>
                <FileInput sendMethod={sendFile}/>
                <h6>
                    Não é realizado o armazenamento dos arquivos :)
                </h6>
                <Result
                    content={content ?? ""}
                />
                <ProgressLoad/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;