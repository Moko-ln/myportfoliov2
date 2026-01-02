"use client";

import { montserrat } from "@/font/Fonts";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowUpRight } from "react-icons/fi";
import { sendEmail } from "@/actions/emailActions";
import { useEffect, useState } from "react";

import { toast } from "sonner";
import { useDictionary } from "@/hooks/useDictionary";
import { inputsInitialTypeProp } from "@/type";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

export const FormCustom = () => {

    const { dictionary } = useDictionary();

    const labelbtn = dictionary?.contactme.labelbtn || "Send Message";
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<inputsInitialTypeProp>();

    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(0);
    const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);
    
    useEffect(() => {
        if (feedback) {
            if (feedback.success) {
                toast.success(feedback.message)
            } else {
                toast.warning(feedback.message)
            }
        }
    }, [feedback]);

    const onSubmit: SubmitHandler<inputsInitialTypeProp> = async (data) => {
        setLoading(true);
        setFeedback(null);
        setTimer(0);

        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);

        const response = await sendEmail(data);
        setLoading(false);
        clearInterval(interval);

        if (response.success) {
            setFeedback({ success: true, message: dictionary?.message.successResponse });
            reset();
        } else {
            setFeedback({ success: false, message: response.error || dictionary?.message.errorResponse });
        }
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}   
            className="flex flex-col gap-4 w-full"
        >
            <div className="flex md:flex-row flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                    <Label
                        name="fullname"
                        label={dictionary?.contactme.forms.fullname.text}
                        error={errors.email}
                    />
                    <Input 
                        name="fullname" 
                        required={dictionary?.contactme.forms.fullname.required}
                        placeholder={dictionary?.contactme.forms.fullname.placeholder}
                        register={register}
                        error={errors?.fullname}
                        error_message={errors?.fullname?.message}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Label
                        name="email"
                        label={dictionary?.contactme.forms.email.text}
                        error={errors.email}
                    />
                    <Input 
                        name="email" 
                        required={dictionary?.contactme.forms.email.required}
                        placeholder={dictionary?.contactme.forms.email.placeholder}
                        register={register}
                        error={errors?.email}
                        error_message={errors?.email?.message}
                        invalidEmailMessage={dictionary?.contactme.forms.email.invalidEmailMessage}
                    />
                </div>  
            </div>

            <div className="flex flex-col gap-2">
                <Label
                    name="subject"
                    label={dictionary?.contactme.forms.subject.text}
                    error={errors.subject}
                />
                
                <select 
                    {...register("subject", { required: `${dictionary?.contactme.forms.subject.required}` })} 
                    className={`${errors.subject ? "border-red-500 placeholder-red-500 placeholder:text-red-200 dark:placeholder:text-red-200" : "border-slate-500 dark:border-slate-300 placeholder:text-slate-500 dark:placeholder:text-slate-400"}  border w-full focus:outline-none rounded-2xl px-4 py-2 text-slate-500 dark:text-slate-200 bg-transparent`}
                >
                    <option>{errors.subject ? errors.subject.message : dictionary?.contactme.forms.subject.placeholder}</option>

                    {dictionary?.contactme.forms.subject.options.map((item: { id: number; value: string; text: string }) => 
                        <option key={item.id} value={item.value}>{item.text}</option>
                    )}

                </select>
            </div>

            <div className="h-auto w-full flex flex-col gap-2">
                <Label
                    name="message"
                    label={dictionary?.contactme.forms.message.text}
                    error={errors.message}
                />
                <textarea 
                    placeholder={errors.message ? errors.message.message : `${dictionary?.contactme.forms.message.placeholder}`} 
                    {...register("message", { required: `${dictionary?.contactme.forms.message.required}` })} 
                    className={`${errors.message ? "border-red-500 placeholder-red-500 placeholder:text-red-200 dark:placeholder:text-red-200" : "border-slate-500 dark:border-slate-300 placeholder:text-slate-500 dark:placeholder:text-slate-400"}  border w-full min-h-32 focus:outline-none rounded-2xl px-4 py-2 text-slate-500 dark:text-slate-200 bg-transparent`}
                />
            </div>
            
            <div className="flex gap-10">
                <button 
                    className={`${montserrat.className} group relative flex items-center bg-blue-500 dark:bg-green-500 text-slate-100 rounded-full px-4 lg:h-12 h-14 justify-center md:w-fit w-full`}
                    type="submit"
                    disabled={loading}
                >
                    { loading ? `${labelbtn}...` : labelbtn } 
                    { !loading && <span className="group-hover:text-blue-300 dark:group-hover:text-green-300 group-hover:rotate-45 transition ease-linear"><FiArrowUpRight /></span> }
                
                </button>
            </div>
            
        </form>
    );
};