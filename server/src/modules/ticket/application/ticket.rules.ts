import {TicketStatus} from '../domain/ticket-status.enum';

const TRANSACCIONES_VALIDAS: Record<TicketStatus, TicketStatus[]>={
    [TicketStatus.OPEN]:[TicketStatus.IN_PROGRESS, TicketStatus.WAITING_CLIENTE],
    [TicketStatus.IN_PROGRESS]: [TicketStatus.WAITING_CLIENTE, TicketStatus.RESOLVED],
    [TicketStatus.WAITING_CLIENTE]:[TicketStatus.IN_PROGRESS, TicketStatus.RESOLVED],
    [TicketStatus.RESOLVED]: [TicketStatus.CLOSED],
    [TicketStatus.CLOSED]:[]
}

export class TicketRules{
    static canChangeStatus(
        current: TicketStatus, next: TicketStatus
    ): boolean{
        return TRANSACCIONES_VALIDAS[current]?.includes(next) ?? false;
    }

    static assertSatusChange(
        current: TicketStatus, next: TicketStatus
    ): void{
        if(current === next){
            throw new Error('Ticket ya se encuentra en ese estado')
        }

        if(!this.canChangeStatus(current, next)){
            throw new Error(`Transaccion invalida de ${current} a ${next}`)
        }
    }
    
    static canBeModified(status: TicketStatus): boolean{
        return status !== TicketStatus.CLOSED;
    }
}