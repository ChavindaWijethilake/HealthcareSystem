
import Chatbot from "@/src/components/Chatbot";
import AppointmentForm from "@/src/components/forms/AppointmentForm";
import { getPatient } from "@/src/lib/actions/patient.action";

import Image from "next/image";
import Link from "next/link";


export default async function NewAppointment({ params: { userId }}: SearchParamProps){
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
     <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
         <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/headerlogo.jpg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit rounded-md"
          />
         </Link>
         
        <AppointmentForm 
            type="create"
            userId={userId}
            patientId={patient.$id}
        />
        <Chatbot/>
        
        <p className="copyright mt-10 py-12">
          ©  Healthcare
        </p>
      </div>
     </section>

    </div>
  );
}
