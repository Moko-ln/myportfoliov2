"use client";

import { montserrat } from "@/font/Fonts";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowUpRight } from "react-icons/fi";
import { sendEmail } from "@/actions/emailActions";
import { useEffect, useState } from "react";

import { toast } from "sonner";
import { useDictionary } from "@/hooks/useDictionary";

type InputsTypeProp = {
    email: string;
    message: string;
    subject:string;
};

export const FormCustom = ({ labelbtn }: { labelbtn: string }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InputsTypeProp>();
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);
    
    const { dictionary } = useDictionary();
    
    useEffect(() => {
        if (feedback) {
            if (feedback.success) {
                toast.success(feedback.message)
            } else {
                toast.warning(feedback.message)
            }
        }
    }, [feedback]);

    const onSubmit: SubmitHandler<InputsTypeProp> = async (data) => {
        setLoading(true);
        setFeedback(null);

        const response = await sendEmail(data);
        setLoading(false);

        if (response.success) {
            setFeedback({ success: true, message: "Message bien reçu ! Je vais vous contacter sous peu." });
            reset();
        } else {
            setFeedback({ success: false, message: response.error || "Oups… Une erreur s’est produite. Veuillez réessayer plus tard." });
        }
    };

    return (
        <motion.form 
            onSubmit={handleSubmit(onSubmit)}   
            className="flex flex-col gap-4 lg:w-96 w-full"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="email" className="sr-only">{dictionary?.contactme.forms.email.text}</label>
                <input 
                    placeholder={errors.email ? errors.email.message : "Email"} 
                    {...register("email", { required: `${dictionary?.contactme.forms.email.required}` })} 
                    className={`${errors.email ? "border-red-500 placeholder-red-500" : "lg:border-slate-200 border-slate-400"} border w-full h-12 focus:outline-none rounded-sm p-2 text-slate-700`}
                />
            </div>
            <div>
                <select 
                    {...register("subject", { required: `${dictionary?.contactme.forms.subject.required}` })} 
                    className={`${errors.subject ? "border-red-500 placeholder-red-500 text-red-500" : "lg:border-slate-200 border-slate-400 text-slate-500"} border w-full h-12 focus:outline-none rounded-sm p-2`}
                >
                    <option value="">{errors.subject ? errors.subject.message : dictionary?.contactme.forms.subject.text}</option>

                    {dictionary?.contactme.forms.subject.options.map((item: { id: number; value: string; text: string }) => 
                        <option key={item.id} value={item.value}>{item.text}</option>
                    )}

                </select>
            </div>
            <div className="h-auto w-full">
                <textarea 
                    placeholder={errors.message ? errors.message.message : `${dictionary?.contactme.forms.message.text}`} 
                    {...register("message", { required: `${dictionary?.contactme.forms.message.required}` })} 
                    className={`${errors.message ? "border-red-500 placeholder-red-500" : "lg:border-slate-200 border-slate-400 text-slate-700"} p-2 w-full h-32 focus:outline-none rounded-sm border`}
                />
            </div>

            <motion.button 
                className={`${montserrat.className} group bg-white relative flex items-center border border-slate-400 rounded-full w-40 px-4 lg:h-12 h-14 justify-center`}
                initial={{ scale: .95 }} 
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 25 }}
                type="submit"
                disabled={loading}
            >
                <motion.span 
                    className="bg-white flex items-center justify-center w-full gap-2 min-w-40 px-4 lg:h-12 h-14 border border-slate-400 z-0 rounded-full"
                    initial={{ y: 10, x: 10 }} 
                    whileHover={{ y: 0, x: 0 }}
                >
                    { loading ? `${labelbtn}...` : labelbtn } 
                    { !loading && <span className="group-hover:text-slate-300 group-hover:rotate-45 transition ease-linear"><FiArrowUpRight /></span> }
                </motion.span>
            </motion.button>
        </motion.form>
    );
};