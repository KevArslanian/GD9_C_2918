import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} text-xl md:text-2xl`}>
        Customers
      </h1>
    </main>
  );
}
