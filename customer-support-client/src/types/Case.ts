//  INTERFAS DE CASO
export interface Case {
    id: string;
    title: string;
    description: string;
    status: '';
    priority: '';
    assignedAgentId?: string;
    companyId: string;
    createdAt: string;
}