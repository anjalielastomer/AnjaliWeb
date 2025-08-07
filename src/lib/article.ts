import axios from "axios";

export default async function Article(){
    const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
    return res.data;
}