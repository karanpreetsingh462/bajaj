export interface ApiRequest {
  data: string[];
}

export interface ApiResponse {
  status: string;
  userId: string;
  collegeEmailId: string;
  collegeRollNumber: string;
  numbers: number[];
  alphabets: string[];
}

export type DisplayOption = 'alphabets' | 'numbers' | 'highestAlphabet';