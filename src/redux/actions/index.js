import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "./../../utils/api"
// * asenkron thunk aksiyonu
export const getLanguages=createAsyncThunk("languages/getLanguages",async ()=>{
    // api istegi atılır
    const res=await api.get("/getLanguages")
    
    //* Payload a return edilir
    return res.data.data.languages
})

export const translateText=createAsyncThunk("translate",async (p)=>{
    console.log(p)
    // API ye gönderilecek olan parametreleri belirleme
    const params =new URLSearchParams()
    
    params.set("source_language",p.sourceLang.value);
    params.set("target_language",p.targetLang.value);
    params.set("text",p.text);
    console.log(params)
    // API a gönderilecek header ı belirledik
    // const headers={
    //     "content-type":"application/x-www-form-urlencoded",
    // };

    const headers= {
        'x-rapidapi-key': 'a082eb287dmsh1380849a26b0703p124dc5jsn234c14270c84',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      }
    // api ye isteğini at
    const res=await api.post("/translate",params,{headers})
    console.log(res)
    // payload ı belirle
    return res.data.data


})