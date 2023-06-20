import Layout from "@/components/layouts/Layout";

// asdfahsdfsahdfjksafsa?
export default function Home() {
  return (
    <div className="font-sans bg-zinc-100">
      <Layout>
        <main className="container px-4 flex flex-col gap-12 mt-14">
          <section className="flex gap-4 w-full justify-between">
            <div className="h-32 w-64 flex-1 bg-sky-200 rounded-3xl shadow-md"></div>
            <div className="h-32 w-64 flex-1 bg-slate-400 rounded-3xl shadow-md"></div>
            <div className="h-32 w-64 flex-1 bg-red-300 rounded-3xl shadow-md"></div>
            <div className="h-32 w-64 flex-1 bg-emerald-200 rounded-3xl shadow-md"></div>
          </section>
          <section>
            <div className="w-full rounded-2xl">
              <div className="h-14 px-10 flex items-center text-2xl font-semibold bg-slate-200 rounded-2xl justify-between">
                <p>Notifikasi</p>
                <p className="text-base text-amber-500">Refresh</p>
              </div>
              <div>
                <div className="flex gap-4 px-5 items-center h-12 border rounded-2xl ">
                  <p className="w-36 font-semibold flex justify-between items-center">
                    21/05/2023
                    <span className="bg-gray-200 py-1 px-2 rounded-lg font-normal">14.38</span>
                  </p>
                  <p className="flex-1">Ningsih Cans telah berhasil melakukan pendaftaran mentor</p>
                  <p className="mr-32">Mentor</p>
                  <button
                    className="bg-cyan-500 rounded-full px-4 py-1 font-bold text-white
                    hover:cursor-pointer hover:bg-cyan-600 duration-150  "
                  >
                    Check
                  </button>
                </div>
                <div className="flex gap-4 px-5 items-center h-12 border rounded-2xl ">
                  <p className="w-36 font-semibold flex justify-between items-center">
                    11/11/1111
                    <span className="bg-gray-200 py-1 px-2 rounded-lg font-normal">14.38</span>
                  </p>
                  <p className="flex-1">Rafie telah mendaftar untuk melakuan mentoring</p>
                  <p className="mr-32">Mentor</p>
                  <button
                    className="bg-cyan-500 rounded-full px-4 py-1 font-bold text-white
                    hover:cursor-pointer hover:bg-cyan-600 duration-150 "
                  >
                    Check
                  </button>
                </div>

              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}
