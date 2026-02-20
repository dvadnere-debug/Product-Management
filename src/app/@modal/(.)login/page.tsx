"use client";
import {useRouter} from "next/navigation";
import {useEffect, useRef} from "react";

export default function LoginModal(){
    const router = useRouter()
    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(()=> { dialogRef.current?.showModal()},[])
    return(
        <dialog 
        ref={dialogRef}
        onClose={() => router.back()}
        className="border p-4">
            <button onClick={()=> dialogRef.current?.close()}>

            </button>
        </dialog>
    )

}