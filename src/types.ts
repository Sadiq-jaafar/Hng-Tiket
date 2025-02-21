export interface TicketData {
  name: string;
  email: string;
  ticketType: string;
  quantity: number;
  specialRequest: string;
  photo: File | null;
}