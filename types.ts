
export interface FatwaResponse {
  answer: string;
  evidence: string[];
  scholarsReferenced: string[];
}

export enum AppState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  RESULT = 'RESULT',
  ERROR = 'ERROR'
}
