import { CanalAtendimentoInterface } from '@/Interface/authenticate/authenticateInterface';
import { CadastrarUsuarioService, ListarUsuarioService } from '@/service/Athenticate/cadastrarUsuario/cadastrarUsarioService';


export async function CadastrarUsuarioController( props: CanalAtendimentoInterface) {
    const ResponseGrupo = await CadastrarUsuarioService(props)
    .then((response:any) => {
        return response.data
        
    }).catch((err) => {
        console.log( err );
        throw err;
    });

    return ResponseGrupo
}

export async function ListarUsuarioController() {
    const ResponseGrupo = await ListarUsuarioService()
    .then((response:any) => {
        return response.data
        
    }).catch((err) => {
        console.log( err );
        throw err;
    });

    return ResponseGrupo
}