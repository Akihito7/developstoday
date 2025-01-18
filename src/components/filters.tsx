'use client';

import { getVehiclesMakes } from '@/actions/get-vehicles-makes';
import * as DropDown from '@/components/dropdown';
import { yearsOptions } from '@/utils/mock';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Filters() {
  const [vehiclesOptions, setVehiclesOptions] = useState([] as any);
  const [filteredOptions, setFilteredOptions] = useState({
    idVehicleMake: null,
    selectedYear: null,
  });

  async function fetchVehiclesMakes(): Promise<void> {
    try {
      const vehicles = await getVehiclesMakes();
      const vehiclesFormatted = vehicles.Results.map((vehicle) => {
        return {
          label: vehicle.MakeName,
          value: vehicle.MakeId,
        };
      });
      setVehiclesOptions(vehiclesFormatted);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  }

  useEffect(() => {
    fetchVehiclesMakes();
  }, []);

  // Verifica se o botão deve ser habilitado ou não
  const isButtonDisabled =
    !filteredOptions.idVehicleMake || !filteredOptions.selectedYear;

  return (
    <div className="flex gap-2 items-end">
      <DropDown.Root>
        <DropDown.Label htmlFor="vehicleMake">Vehicle Make</DropDown.Label>
        <DropDown.Dropdown
          onChange={(e: any) => {
            setFilteredOptions((prev) => {
              return {
                ...prev,
                idVehicleMake: e.target.value,
              };
            });
          }}
          id="vehicleMake"
          options={vehiclesOptions}
        />
      </DropDown.Root>

      <DropDown.Root>
        <DropDown.Label htmlFor="vehicleYear">Vehicle Year</DropDown.Label>
        <DropDown.Dropdown
          id="vehicleYear"
          onChange={(e: any) => {
            setFilteredOptions((prev) => {
              return {
                ...prev,
                selectedYear: e.target.value,
              };
            });
          }}
          options={yearsOptions}
        />
      </DropDown.Root>

      <Link
        href={
          isButtonDisabled
            ? '/'
            : `result/${filteredOptions.idVehicleMake}/${filteredOptions.selectedYear}`
        }
        className={`py-2 px-6 rounded-md text-lg font-semibold shadow-md transition ease-in-out duration-300 w-full sm:w-auto text-center mx-auto ${
          isButtonDisabled
            ? 'bg-blue-400 cursor-not-allowed opacity-50'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Next
      </Link>
    </div>
  );
}
