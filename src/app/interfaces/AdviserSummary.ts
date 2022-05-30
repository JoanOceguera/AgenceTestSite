export interface AdviserSummary
{
    co_usuario: string;
    no_usuario: string;
    fixed_cost: number;
    operationsSummary: Map<string, string | number>;
    commissions: Map<string, string | number>;
}