import { ApiRequest, ApiResponse } from '../types';

// Simulated API service
export const processData = async (request: ApiRequest): Promise<ApiResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const numbers: number[] = [];
  const alphabets: string[] = [];

  // Process the input array
  request.data.forEach(item => {
    if (/^\d+$/.test(item)) {
      numbers.push(parseInt(item, 10));
    } else if (/^[A-Za-z]$/.test(item)) {
      alphabets.push(item);
    }
  });

  return {
    status: "success",
    userId: "USER123",
    collegeEmailId: "student@college.edu",
    collegeRollNumber: "2024CS001",
    numbers: numbers.sort((a, b) => a - b),
    alphabets: alphabets.sort(),
  };
};