import { TableResults } from '@/components/table-results';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getVehiclesMakes } from '@/actions/get-vehicles-makes';
import { yearsOptions } from '@/utils/mock';
import { PageProps } from '../../../../../.next/types/app/layout';

export default async function Result({ params }: PageProps) {
  const { makeId, year } = await params;
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 rounded-lg shadow-lg">
      <div className="flex gap-6 items-center mb-6">
        <Link href="/">
          <ArrowLeft size={28} className="cursor-pointer" />
        </Link>

        <h1 className="text-3xl font-semibold text-white">
          Vehicle Information
        </h1>
      </div>
      <TableResults vehicleMakeId={makeId} year={year} />
    </div>
  );
}
export async function generateStaticParams() {
  const vehiclesMakes = await getVehiclesMakes();
  const paths = vehiclesMakes.Results.flatMap((make) => {
    return yearsOptions.map((year) => ({
      params: {
        makeId: make.MakeId.toString(),
        year: year.value,
      },
    }));
  });
  return paths;
}
