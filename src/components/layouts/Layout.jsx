import Image from "next/image";
import { useRouter } from "next/router";
import { MENU_LIST } from "./constants";

export default function Layout({ children }) {
    const router = useRouter();

    // let menuName;

    // MENU_LIST.find((menu) => {
    //     if (menu.path === router.pathname) {
    //         menuName = menu.name
    //     }
    //     else {
    //         menuName = menu.name
    //     }

    // });


    // const menuName = menu ? menu.name:''

    // if (menu) {

    // }



    const handleChangePage = (path) => {
        router.push(path)
    }
    return (

        <main className="flex">
            <aside className="h-screen w-64 bg-blue-800 text-white text-xl flex-col flex shadow-2xl">
                <div className="self-center mt-8 w-full flex flex-col items-center justify-center gap-8">
                    <Image src="/logo.svg" width={200} height={0} alt="develovLogo" />
 
                    <hr width="80%" />
                </div>
                <nav>
                    <ul className="my-10">
                        {MENU_LIST.map((menu, index) => {
                            const isActive = router.pathname === menu.path

                            const listItemStyle = isActive
                                ? 'h-16 pl-10 font-semibold flex items-center text-amber-500 bg-zinc-100'
                                : 'h-16 pl-10 font-semibold flex items-center hover:bg-blue-900 duration-150 hover:cursor-pointer'

                            return (

                                <li
                                    className={listItemStyle}
                                    key={index}
                                    onClick={() => {
                                        handleChangePage(menu.path)
                                        console.log(router.pathname)
                                    }}
                                >
                                    {menu.name}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </aside>
            <main className="flex flex-col flex-1">
                <header className="bg-zinc-100 h-16 shadow-md flex justify-between items-center px-14" >

                    <h1 className="text-2xl font-bold text-slate-900">
                        {MENU_LIST.find((menu) => menu.path === router.pathname)?.name}

                        {/* {menuName} */}



                    </h1>
                    <div className="dropdown ">
                        <details className="dropdown dropdown-end">
                            <summary className="m-1 btn no-animation">
                                <div className="flex items-center justify-center w-fit rounded-lg  gap-5 font-semibold">
                                    <Image className="rounded-full h-8 w-8"
                                        src="/profile.jpg"
                                        width={100}
                                        height={100}
                                        alt="admin-profil"
                                        style={{ objectFit: 'cover' }} />
                                    <p>Jhon Doe | admin</p>
                                    <button>v</button>
                                </div>
                            </summary>
                            <div tabIndex={0} className="p-2 shadow menu dropdown-content bg-zinc-100 rounded-box w-52 drop-shadow-md">
                                <li><span className="hover:bg-red-500 hover:text-zinc-100 h-fit">Keluar</span></li>
                            </div>
                        </details>
                    </div>
                </header>
                <section className="container mx-auto">
                    {children}
                </section>
            </main>
        </main>

    )

}