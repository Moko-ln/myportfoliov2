"use client";

export const Section = ({ className, isSnap=false, children }: { className?: string; isSnap?:boolean; children: React.ReactNode }) => {

    return (
        <section className={`${isSnap ? "snap-y snap-mandatory overflow-y-scroll" : ""} h-screen w-full no-scrollbar scroll-smooth ${className}`}>
            {children}
        </section>
    )
}