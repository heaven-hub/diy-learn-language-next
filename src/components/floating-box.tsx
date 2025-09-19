import { ReactNode } from "react";

interface FloatingBoxProps {
    children?: ReactNode;
    className?:string;
}
// const style = {
//     position: 'fixed',
//     top: '100px',
//     left: '100px',
//     width: '200px',
//     height: '150px',
//     background: 'rgba(0,0,0, 0.2)',
//     'backdrop-filter': 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.4)',
//     border-radius: '8px',
//     'z-index': '999999',
//     resize: 'both',
//     overflow: 'auto',
// }
export default function FloatingBox({ children,className='' }: FloatingBoxProps) {
    return (
        <div className={`fixed top-[30px] left-[20vw] w-[30vw] h-[150px] bg-white resize border rounded-md overflow-auto ${className}`}>
            {children}
        </div>
    );
}