import { useLanyard } from "react-use-lanyard";
import type { LanyardData } from "react-use-lanyard";

export function useDiscordStatus(): {
  loading: boolean;
  status?: LanyardData;
  websocket?: WebSocket;
} {
  return useLanyard({
    userId: "118836855394271232",
    socket: true,
  });
}
