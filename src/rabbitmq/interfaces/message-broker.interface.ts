import { Observable } from "rxjs";

export interface MessageBroker {
  emitirEvento(topico: string, payload: any): Observable<void>;
}
