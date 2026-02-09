import { TicketErrorCode } from "./ticket-error.code";

export class DomainError extends Error {
    readonly code: string;

    constructor(code: string, message: string){
        super(message)
        this.code = code;
        this.name = 'DomainError';

        Object.setPrototypeOf(this, DomainError.prototype);
    }
}

export class TicketNotFundError extends DomainError{
    constructor(id: number){
        super(TicketErrorCode.TICKET_NOT_FOUNTD,`Ticket no existe: ${id}`)
    }
}

export class InvalidTicketStateError extends DomainError {
  constructor() {
    super(TicketErrorCode.INVALID_STATUS_TRANSACTION, 'Estado de ticket inválido');
  }
}
