export interface TicketComment {
    id: number;
    ticketId: number;
    authorId: string;
    messafe: string;
    createdAt: Date;
}