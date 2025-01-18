'use client';

import { getVehicleByMakeId } from '@/actions/get-vehicle-by-make.id';
import { VehicleData } from '@/types/response';
import { useEffect, useState } from 'react';

interface TableResultsProps {
  vehicleMakeId: string;
  year: string;
}
export function TableResults({ vehicleMakeId, year }: TableResultsProps) {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchVehicles() {
    setIsLoading(true);
    setError(null);

    try {
      const vehicles = await getVehicleByMakeId({ vehicleMakeId, year });
      setVehicles(vehicles.Results || []);
    } catch (err: any) {
      setError(err.message || 'Error fetching data.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchVehicles();
  }, [vehicleMakeId, year]);

  if (isLoading) {
    return (
      <div className="animate-pulse min-h-screen">
        <table className="min-w-full table-auto border-collapse border border-gray-600 rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-6 py-4 border-b border-gray-600 text-left text-white text-lg font-medium">
                Make ID
              </th>
              <th className="px-6 py-4 border-b border-gray-600 text-left text-white text-lg font-medium">
                Make Name
              </th>
              <th className="px-6 py-3 border-b border-gray-600 text-left text-white text-lg font-medium">
                Model ID
              </th>
              <th className="px-6 py-3 border-b border-gray-600 text-left text-white text-lg font-medium">
                Model Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800">
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="hover:bg-gray-700">
                {[...Array(4)].map((__, idx) => (
                  <td
                    key={idx}
                    className="px-6 py-6 border-b border-gray-600 bg-gray-700 h-6"
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-red-500 text-lg font-medium">{error}</p>
        <button
          onClick={fetchVehicles}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-600 rounded-lg overflow-hidden shadow-md">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-6 py-3 border-b border-gray-600 text-left text-white text-lg font-medium">
            Make ID
          </th>
          <th className="px-6 py-3 border-b border-gray-600 text-left text-white text-lg font-medium">
            Make Name
          </th>
          <th className="px-6 py-3 border-b border-gray-600 text-left text-white text-lg font-medium">
            Model ID
          </th>
          <th className="px-6 py-3 border-b border-gray-600 text-left text-white text-lg font-medium">
            Model Name
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-800">
        {vehicles.map((vehicle, index) => (
          <tr key={index + vehicle.Model_ID} className="hover:bg-gray-700">
            <td className="px-6 py-4 border-b border-gray-600 text-white">
              {vehicle.Make_ID}
            </td>
            <td className="px-6 py-4 border-b border-gray-600 text-white">
              {vehicle.Make_Name}
            </td>
            <td className="px-6 py-4 border-b border-gray-600 text-white">
              {vehicle.Model_ID}
            </td>
            <td className="px-6 py-4 border-b border-gray-600 text-white">
              {vehicle.Model_Name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
