import {TicketStatus} from '../domain/ticket-status';
import {DomainError} from '../domain/domain-error'
import {TicketErrorCode} from '../domain/ticket-error.code'

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

    static assertStatusChange(
        current: TicketStatus, next: TicketStatus
    ): void{
        if(current === next){
            TicketErrorCode.INVALID_STATUS_TRANSACTION, 'El ticket ya se encuentra en ese estado';
        }

        if(!this.canChangeStatus(current, next)){
            TicketErrorCode.INVALID_STATUS_TRANSACTION,`No se puede cambiar el estado de ${current} a ${next}`;
        }
    }

    static assertModiable(status: TicketStatus):void{
        if(status === TicketStatus.CLOSED){
            throw new DomainError(
                TicketErrorCode.TICKET_ALREADY_CLOSE, 'Un ticket cerrado no puede ser modificado'
            )
        }
    }
    
    static canBeModified(status: TicketStatus): boolean{
        return status !== TicketStatus.CLOSED;
    }
}