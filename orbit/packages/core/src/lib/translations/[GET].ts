import {
  Translation,
  TranslationRaw,
  TranslationResponse,
} from "../../contracts";
import { http } from "../../http";

export async function _get(): Promise<TranslationResponse> {
  // todo: remove TranslationRaw when backend is ready
  // const response: TranslationRaw[] = await http.get("/translations");
  const mock: TranslationResponse = {
    data: [
      {
        key: "hello_there",
        group: "shared",
        messages: [
          {
            language: "en-US",
            message:
              "This booking has at least one active insurance policy. Once issued, these policies cannot be cancelled or reimbursed. Are you sure you want to cancel this booking?",
          },
          {
            language: "pt-PT",
            message:
              "Este agendamento tem pelo menos uma apólice de seguro ativa. Uma vez emitidas, essas apólices não podem ser canceladas ou reembolsadas. Tem a certeza de que deseja cancelar este agendamento?",
          },
          {
            language: "es-ES",
            message:
              "Esta reserva tiene al menos una póliza de seguro activa. Una vez emitidas, estas pólizas no se pueden cancelar o reembolsar. ¿Estás seguro de que quieres cancelar esta reserva?",
          },
        ],
      },
    ],
    meta: {
      current_page: 1,
      first_page: 1,
      last_page: 1,
      per_page: 10,
      total: 1,
      languages: ["en-US", "pt-PT", "es-ES"],
    },
  };

  return mock;
}
