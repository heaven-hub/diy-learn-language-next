"use client"
import SvgImage from "@/components/svg-image";
import "./globals.css";
import '@/i18n'
import { usePathname,useRouter } from 'next/navigation'
import { useTranslation } from 'next-i18next'
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const routerList = ['collation','listening','speaking','reading','writing']
    const router = useRouter();
    const pathname = usePathname()
    const toPage = (pageName:string)=>{
        if(pathname !== `/${pageName}`){
            router.push(`/${pageName}`,{ scroll: false });
        }
    }
    const { t } = useTranslation()
    const currentPath = ()=>{
        return pathname.slice(1)
    }
    return (
        <html lang="en">
            <body>
                <div className="flex bg-red">
                    { routerList.includes(currentPath())? <ul className="px-[15px] py-[10px]">
                        {
                            routerList.map(item=>{
                                return (
                                    <li onClick={()=>toPage(item)} className="flex flex-col items-center min-w-[70px] mt-[15px] cursor-pointer" key={item}>
                                        <span>{t(item)}</span>
                                        <SvgImage
                                            className="dark:invert self-center"
                                            svgName={item}
                                            alt={item+'logo'}
                                            W={30}
                                            H={30}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>:''}
                    <div className="p-[20px]">{children}</div>
                </div>
            </body>
        </html>
    );
}
