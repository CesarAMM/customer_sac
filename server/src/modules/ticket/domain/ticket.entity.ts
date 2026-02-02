import {type TicketStatus} from './ticket-status.enum'

export interface Ticket {
    id: number,
    title: string;
    description: string;
    status: TicketStatus;
    createdBy: string;
    assignedTo: string;
    createdAt: Date;
    closedAt: Date;
    updatedAt: Date;
}