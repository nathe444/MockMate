import Link from 'next/link'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'


const MenuOption = [
    {
        name:'Dashboard',
        path:'/dashboard'
    } ,
    {
        name:'Upgrade',
        path:'/upgrade'
    },
    {
        name:'How it works?',
        path :'/how-it-works'
    }
]

const AppHeader = () => {
  return (
    <div>
        <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
                <Image src={'/logo.svg'} alt="Logo" width={32} height={32} />
                <h1 className="text-base font-bold md:text-2xl">MockMate</h1>
            </div>

            <div className='flex justify-around items-center md:w-1/3 w-2/3'>
                {
                    MenuOption.map((option , index)=>{
                        return (
                            <Link key={index} href={option.path} className='hover:bg-primary hover:text-white px-4 py-2 rounded-md'>
                                {option.name}
                            </Link>
                        )
                    })
                }
            </div>

             <UserButton />
           
        </nav></div>
  )
}

export default AppHeader