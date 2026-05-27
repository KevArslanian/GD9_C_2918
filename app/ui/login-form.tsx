import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Welcome back!
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Click below to access the dashboard.
        </p>
        <Link href="/dashboard">
          <Button className="mt-4 w-full">
            Go to Dashboard <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
