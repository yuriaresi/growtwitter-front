import { Usuario } from "./Usuario.model";

export interface Tweet {
  id: string;
  conteudo: string;
  tipoTweet: string;
  usuarioId: Usuario;
}
