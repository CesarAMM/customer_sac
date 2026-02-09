import {type TicketStatus} from './ticket-status'

export class Ticket {
    constructor(
        public readonly ticket:         number,
        public readonly caso:           string,
        public readonly titulo:         string,
        public readonly descripcion:    string,
        public readonly createdBy:      string,
        public readonly status:         TicketStatus,
        public readonly assignedTo:     string,
        public readonly createdAt:      string,
        public readonly closedAt:       string,
        public readonly updatedAt:      string,

    ){}
}