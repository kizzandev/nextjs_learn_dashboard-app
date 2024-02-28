import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

import Table from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <Suspense fallback={<CustomersTableSkeleton />}>
      <Table query={query} />
    </Suspense>
  );
}
