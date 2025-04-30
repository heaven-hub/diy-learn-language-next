"use client"
import SvgImage from "@/components/svg-image";
import "./globals.css";
import { usePathname,useRouter } from 'next/navigation'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const routerList = ['listening','speaking','reading','writing','xmind']
    const router = useRouter();
    const pathname = usePathname()
    const toPage = (pageName:string)=>{
        if(pathname !== `/${pageName}`){
            router.push(`/${pageName}`,{ scroll: false });
        }
    }
    return (
        <html lang="en">
            <body>
                <h1>dddd</h1>
                <div className="flex bg-red">
                    <ul className="px-[15px] py-[10px]">
                        {
                            routerList.map(item=>{
                                return (
                                    <li onClick={()=>toPage(item)} className="flex flex-col items-center mt-[15px] cursor-pointer" key={item}>
                                        <span>{item.toUpperCase()}</span>
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

                    </ul>
                    <div>{children}</div>
                </div>
            </body>
        </html>
    );
}
