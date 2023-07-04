import useAxios from "../plugins/axios";

function useJeto() {

    const axiosInstance = useAxios();

    return {
        analyze(text) {
            const url = `${process.env.REACT_APP_JETO_ANALYZER}`

            axiosInstance.defaults.baseURL = url;

            const headers = {
                'Content-Type': 'text/plain',
                'charset': 'utf-8'
            }

            return axiosInstance.post(url, {text}, {headers});
        },

        check() {
            return axiosInstance.get("v1/jeto");
        },

        extract(file, fileName) {
            const formData = new FormData();

            formData.append("file", file);
            formData.append("filename", fileName)

            return axiosInstance.post("v1/jeto/extract", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
    };
}

export default useJeto;