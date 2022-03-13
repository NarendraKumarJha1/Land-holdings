import axios from "axios";
// import { dataIndexAttribute } from "react-horizontal-scrolling-menu/dist/types/constants";

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '31f791c0f3msh1988cd4f33dba7bp179aa6jsn74a333ae24ef'
          }
        
    });
    return data;
}