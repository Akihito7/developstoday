import { getVehiclesMakes } from '@/actions/get-vehicles-makes';
import { yearsOptions } from '@/utils/mock';

export async function generateStaticParams() {
  const vehiclesMakes = await getVehiclesMakes();
  const paths = vehiclesMakes.Results.flatMap((make) => {
    return yearsOptions.map((year) => ({
      params: {
        vehicleMake: make.MakeId.toString(),
        vehicleYear: year.toString(),
      },
    }));
  });

  return paths;
}
