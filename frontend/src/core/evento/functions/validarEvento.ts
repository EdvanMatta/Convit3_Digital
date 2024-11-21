import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
    const erros: string[]=[];
    if(!evento.alias){erros.push("Alias é obrigatório")}
    if(!evento.nome){erros.push("Nome é obrigatório")}
    if(!evento.data){erros.push("Data é obrigatório")}
    if(!evento.local){erros.push("Local é obrigatório")}
    if(!evento.publicoEsperado || evento.publicoEsperado < 1){erros.push("Publico esperado é obrigatório")}
    if(!evento.imagem){erros.push("Imagem é obrigatório")}
    if(!evento.imagemBackground){erros.push("Imagem de fundo é obrigatório")}
    return erros;
}