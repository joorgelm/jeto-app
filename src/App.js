import FileInput from "./components/FileInput/FileInput";
import Result from "./components/Result/Result";
import Footer from "./components/Footer/Footer";
import ProgressLoad from "./components/ProgressLoad/ProgressLoad";
import useJeto from "./endpoints/jeto";
import {useDispatch, useSelector} from "react-redux";
import imageCompression from "browser-image-compression";

function App() {
    const jetoApi = useJeto();
    const dispatch = useDispatch();

    async function compressImage(file) {

        if (file.type.includes("pdf")) return file;

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        }
        try {
            return imageCompression(file, options);
        } catch (error) {
            console.log(error);
        }
    }

    async function sendFile({target}) {
        const [file,] = target.files;

        const compressed = await compressImage(file);

        const {data} = await jetoApi.extract(compressed, file.name);

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