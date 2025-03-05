import SvgImage from "@/components/svg-image";
import "./globals.css";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const routerList = ['listening','speaking','reading','writing']
    return (
        <html lang="en">
            <body>
                <div className="flex bg-red">
                    <ul className="px-[15px] py-[10px]">
                        {
                            routerList.map(item=>{
                                return (
                                    <li className="flex flex-col mt-[15px] cursor-pointer" key={item}>
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
