import sql from 'mssql';
import { TicketRepository } from '../domain/ticket.repository';
import { Ticket } from '../domain/entity-ticket';
import { TicketStatus } from '../domain/ticket-status';
import { TicketComment } from '../domain/entity-ticket_commet';

export class SqlServerTicketRepository implements TicketRepository {
    constructor(private readonly pool: sql.ConnectionPool){}

    async findById(id: number): Promise<Ticket | null> {
        const result = await this.pool
            .request()
            .input('i_tiket', sql.Int, id)
            .query(`select ${id}`);
        if (result.recordset.length === 0) return null;

        const row = result.recordset[0];
        return new Ticket(
            1, "Caso", "caso", "caso", "01/01/2026", TicketStatus.CLOSED, "cammy", "01/01/2026", "01/01/2021", "01/01/2021"
        )
    }

    async addComment(comment: TicketComment): Promise<void> {
        
    }

    async create(ticket: Ticket): Promise<Ticket | null> {
        return null
    }
     
    async updateStatus(ticketId: number, status: TicketStatus): Promise<void> {
        
    }
}