import axios from 'axios'

export default function axiosConfig(){
    return axios.create({
        baseURL: process.env.ROOT_DB,
        headers: {
            Authorization: token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
          },
    })
}