import React from 'react'
import Image from "next/image";
import RegisterForm from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.action';
import Link from 'next/link';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  
  return (
    <div className="flex h-screen max-h-screen">
     <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
         <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.jpeg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit rounded-md"
          />
         </Link>

        <RegisterForm user={user} />

        
        <p className="copyright py-12">
          ©  Ayuniya
        </p>
      </div>
     </section>

    </div>
  )
}

export default Register