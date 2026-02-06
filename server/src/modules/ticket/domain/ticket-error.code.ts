export const TicketErrorCode = {
    INVALID_STATUS_TRANSACTION: 'INVALID_STATUS_TRANSACTION',
    TICKET_ALREADY_CLOSE: 'TICKET_ALREADY_CLOSE',
    TICKET_NOT_MODIFIABLE: 'TICKET_NOT_MODIFIABLE'
}as const;

export type TicketErrorCode = typeof TicketErrorCode[keyof typeof TicketErrorCode];