import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import StatCard from '@/src/components/StatCard';
import { getRecentAppointmentList } from '@/src/lib/actions/appointment.actions';
import { DataTable } from '@/src/components/table/DataTable';
import { columns } from '@/src/components/table/columns';
import Chatbot from '@/src/components/Chatbot';


const Admin = async () => {

  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
        <nav>
         <header className="admin-header">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/headerlogo.jpg"
              height={32}
              width={162}
              alt="logo"
              className="h-8 w-fit rounded-md"
            />
          </Link>

          <p className="text-16-semibold">Admin Dashboard</p>
         </header>
        </nav>
        <main className="admin-main">
          <section className="w-full space-y-4">
            <h1 className="header text-cyan-500">Welcome </h1>
          </section>
          
          <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
          
          </section>
          

          <DataTable columns={columns} data={appointments.documents} />
          
        </main>
        <div className="fixed bottom-5 right-5 z-50">
          <Chatbot />
        </div>
        

    </div>
  )
}

export default Admin