"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

function Interview({params}) {

    const [interviewData,setInterviewData] = useState([]);
    const [webCamEnabled,setWebCamEnabled] = useState(false);

    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewdetails();
    }, [])

    const GetInterviewdetails=async ()=>{
        const result =await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId))
        
        setInterviewData(result[0]);
       
    }

  return (
    <div className=' my-6 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
      <div className='flex flex-col my-5 gap-5 '>
        <div className='flex flex-col p-5 rounded-lg border'>
        <h2 className='text-lg m-1'><strong>Job Role /Job Position:</strong>{interviewData?.jobPosition}</h2>
        <h2 className='text-lg m-1'><strong>Tech Stack:</strong>{interviewData?.jobDescription}</h2>
        <h2 className='text-lg m-1'><strong>Experience:</strong>{interviewData?.jobExperience}</h2>
        </div>
        <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
            <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
            <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION} </h2>
        </div>
        
      </div>
      <div>
       {webCamEnabled? <Webcam
       onUserMedia={()=>setWebCamEnabled(true)}
       onUserMediaError={()=>setWebCamEnabled(false)}
       mirrored={true}
        style={{
            height:500,
            width:400,
        }}
       />
       :
       <>
        <WebcamIcon className='flex h-72 w-full justify-between my-7 p-5 bg-secondary rounded-lg border'/>
        <Button variant='ghost' onClick={()=>setWebCamEnabled(true)} className="w-full">Enable Your Web Cam And Microphone</Button>
        </>
       }
      </div>

      </div>
      
      <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
      <Button>Let's Begin</Button>
      </Link>
     
   
      

    </div>
  )
}

export default Interview
