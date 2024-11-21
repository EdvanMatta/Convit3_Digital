import Convidado from "../model/Convidado";

export default function validarConvidado( convidado: Partial<Convidado>): string[]{
    const erros: string[]=[];
    if(!convidado.nome){erros.push("Nome é obrigatório");}
    if (!convidado.email){erros.push("e-mail é obrigatótio");}
    return erros;
}