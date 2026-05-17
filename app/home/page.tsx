"use client";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const HomePage = () => {
    const router = useRouter();
  return (
   <div className='flex h-screen items-center justify-center'>
     <Button onClick={()=> router.push("/signin")} className='py-5 px-5'>Signin</Button>
   </div>
  )
}

export default HomePage
