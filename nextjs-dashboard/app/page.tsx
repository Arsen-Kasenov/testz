// import NISlogo from '@/app/ui/NISlogo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    
    <main className="flex min-h-screen flex-col p-6">
      {/* <NISlogo /> */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <div className="bg-blue-500 h-48 px-4 py-2 ml-2 rounded-lg">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className} antialiased`}>
            <strong>Welcome to NIStudy.</strong> {' '}
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            <strong>Some cool animation or image???</strong>
            </h1>
        </div>
      </div>
    </main>
  );
}