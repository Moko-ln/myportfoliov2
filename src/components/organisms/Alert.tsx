import { montserrat } from "@/font/Fonts";

type alertPropType = {
    className?: string;
    typeAlert: "success" | "error";
    message:string;
}

export const Alert = ({ className, typeAlert, message } : alertPropType) => {

    const alertType = {
        success:"bg-green-50 text-green-500",
        error:"bg-yellow-50 text-yellow-500"
    }

    return (
        <div className={`${montserrat.className} text-sm p-4 w-96 h-20 rounded-sm ${className} ${typeAlert === "success" ? alertType.success : alertType.error}`}>
            {message}
        </div>
    )
}