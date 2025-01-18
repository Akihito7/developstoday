import { TableResults } from '@/components/table-results';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type ResultProps = {
  params: {
    makeId: string;
    year: string;
  };
};

export default async function Result({ params }: ResultProps) {
  const { makeId, year } = params;
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
