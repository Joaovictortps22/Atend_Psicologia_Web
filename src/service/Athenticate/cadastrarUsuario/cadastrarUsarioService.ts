import { CanalAtendimentoInterface } from '@/Interface/authenticate/authenticateInterface';
import { AxiosResponse } from 'axios';
import API from '../../API';


export async function CadastrarUsuarioService( props : CanalAtendimentoInterface) {
    const response = await API.post<AxiosResponse>(`/autenticate/`, props)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((err)=>{
            throw err.response;
        })
    return response
}

export async function ListarUsuarioService() {
    const response = await API.get<AxiosResponse>(`/autenticate/2`)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((err)=>{
            throw err.response;
        })
    return response
}

 