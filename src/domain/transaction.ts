export interface Transaction {
    id: string;
    userId: string;
    programId: string;
    expiredAt: string;
    quantity: number;
    paidValue: number;
    bonus?: number;
}