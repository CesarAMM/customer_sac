import {type Ticket} from './entity-ticket'
import {type TicketComment} from './entity-ticket_commet'
import { TicketStatus } from './ticket-status';

export interface TicketRepository{
    create(ticket: Ticket): Promise<Ticket | null>;
    findById(id: number): Promise<Ticket | null>;
    addComment(comment: TicketComment): Promise<void>;
    updateStatus(ticketId: number, status: TicketStatus): Promise<void>;
}