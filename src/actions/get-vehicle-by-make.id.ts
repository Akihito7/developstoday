'use server';

import { GetVehicleByMakeIdRequest } from '@/types/request';
import { GetVehiclesByMakeId } from '@/types/response';
import { api } from '@/utils/api';

export async function getVehicleByMakeId({
  vehicleMakeId,
  year,
}: GetVehicleByMakeIdRequest): Promise<GetVehiclesByMakeId> {
  try {
    const response = await fetch(
      api +
        `/api/vehicles/GetModelsForMakeIdYear/makeId/${vehicleMakeId}/modelyear/${year}?format=json`
    );
    if (!response.ok) {
      throw new Error('Error fetching vehicles:');
    }
    const vehicle = await response.json();
    return vehicle;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
}
