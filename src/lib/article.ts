import axios from "axios";

export default async function Article(){
    const res=await axios.get("https://lovable-gift-31985371d0.strapiapp.com/api/articles");
    return res.data;
}