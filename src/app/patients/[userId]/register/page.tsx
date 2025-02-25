import React from 'react'
import Image from "next/image";
import RegisterForm from '@/src/components/forms/RegisterForm';
import { getUser } from '@/src/lib/actions/patient.action';
import Link from 'next/link';
import Chatbot from '@/src/components/Chatbot';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  
  return (
    <div className="flex h-screen max-h-screen">
     <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
         <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/headerlogo.jpg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit rounded-md"
          />
         </Link>

        <RegisterForm user={user} />
        <Chatbot />

        
        <p className="copyright py-12">
          ©  Healthcare
        </p>
      </div>
     </section>

    </div>
  )
}

export default Register