"use client";
import SVGIcon from "@/icons/svg-icon";
import "./globals.css";
import '@/i18n'
import { usePathname,useRouter } from 'next/navigation'
import { useTranslation } from 'next-i18next'
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const routerList = ['collation','listening','speaking','reading','writing'] as const;
    type RouterType = (typeof routerList)[number];
    const router = useRouter();
    const pathname = usePathname()
    const toPage = (pageName:RouterType)=>{
        if(pathname !== `/${pageName}`){
            router.push(`/${pageName}`,{ scroll: false });
        }
    }
    const { t } = useTranslation()
    const currentPath = ()=>{
        return pathname.slice(1) as RouterType
    }

    return (
        <html lang="en">
            <body>
                <div className="flex bg-[#F5F5F5] h-[100%]">
                    { routerList.includes(currentPath())? <ul className="px-[15px] py-[10px]">
                        {
                            routerList.map((item:RouterType)=>{
                                return (
                                    <li onClick={()=>toPage(item)} style={{color:`${currentPath() === item ? '#ABCE98':'#333'}` }} className="flex flex-col items-center min-w-[70px] mt-[15px] cursor-pointer" key={item}>
                                        <span>{t(item)}</span>
                                        <SVGIcon
                                            className="dark:invert self-center"
                                            name={item}
                                            width={30}
                                            height={30}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>:''}
                    <div className="flex-1 p-[20px] overflow-auto">{children}</div>
                </div>
            </body>
        </html>
    );
}
