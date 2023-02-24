export enum Status {
  APPROVED = 'approved',
  DENIED = 'denied',
  PENDING = 'pending',
}

export class CreateApprovalStatusDto {
  status: Status;
  reason: string;
}
