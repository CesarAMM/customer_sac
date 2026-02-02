import {type Ticket} from './ticket.entity'
import {type TicketComment} from './ticket-comment.entity'
import {type TicketHistorial} from './ticket-status-history.entity'
import { TicketStatus } from './ticket-status.enum';

export interface TicketRepository{
    create(ticket: Ticket): Promise<Ticket>;
    findById(id: number): Promise<Ticket | null>;
    addComment(comment: TicketComment): Promise<void>;

    addStatusHistory(history: TicketHistorial): Promise<void>;

    updateStatus(ticketId: number, status: TicketStatus): Promise<void>;
}