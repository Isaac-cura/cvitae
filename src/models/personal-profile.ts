import { DTO } from "./dto";

export interface Job{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

export type JobDTO = Job & DTO;