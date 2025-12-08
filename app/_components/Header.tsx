import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return (
        <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
                <Image src={'/logo.svg'} alt="Logo" width={32} height={32} />
                <h1 className="text-base font-bold md:text-2xl">MockMate</h1>
            </div>
            <Link href={'/dashboard'}>
             <button className="w-24 transform rounded-lg bg-primary hover:bg-primary/90 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 md:w-32 ">
                Login
            </button>
            </Link>
           
        </nav>
    );
};