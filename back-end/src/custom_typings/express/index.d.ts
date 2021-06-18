import CriadorInterface from "../../interfaces/CriadorInterface";

declare global{
    namespace Express{
        interface Request{
            criadorId?: Number;
            mensagemNaoAutorizado: string;
        }
    }
}