import axios from "axios"
import {useDispatch} from "react-redux";

function useAxios() {

    const dispatch = useDispatch();

    const ax = axios.create({
        baseURL: process.env.REACT_APP_JETO_API
    })

    function showLoading() {
        dispatch({type: "SHOW_LOADING"});
    }

    function hideLoading() {
        dispatch({type: "HIDE_LOADING"});
    }

    function setErr(data) {
        console.log(data)
        dispatch({type: "SET_CONTENT", content: ""});
    }

    ax.interceptors.request.use((config) => {
        showLoading();
        return config;
    })

    ax.interceptors.response.use((res) => {

        hideLoading();
        return res;
    }, err => {
        hideLoading();
        setErr(err)
        return {data: err};
    })

    return ax;
}

export default useAxios;