import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import complementarConvidado from "./functions/complemantarConvidado";
import complementarEvento from "./functions/complementarEvento";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import criarEventoVazio from "./functions/criarEventoVazio";

export type { Evento, Convidado };
export {
    complementarConvidado,
    complementarEvento,
    criarConvidadoVazio,
    criarEventoVazio,
}