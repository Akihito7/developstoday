'use server';

import { GetVehiclesMakesResponse } from '@/types/response';
import { api } from '@/utils/api';

export async function getVehiclesMakes(): Promise<GetVehiclesMakesResponse> {
  try {
    const response = await fetch(
      api + '/api/vehicles/GetMakesForVehicleType/car?format=json'
    );
    if (!response.ok) {
      console.error('Error fetching vehicles makes');
    }
    const vehicles = await response.json();
    return vehicles;
  } catch (error) {
    console.error('Error fetching vehicles makes:', error);
    throw error;
  }
}
