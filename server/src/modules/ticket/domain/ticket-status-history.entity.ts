import {type TicketStatus} from './ticket-status.enum'

export interface TicketHistorial{
    id: number;
    ticketId: number;
    fromsStatus: TicketStatus;
    toStatus: TicketStatus;
    changedBy: string;
    changedAt: Date;
}