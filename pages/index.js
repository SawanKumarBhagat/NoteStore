import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import FolderList from "@/components/FolderList";
import NotesList from "@/components/NotesList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState({ value: null });
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setUser({value: token});
    }
    else{
      router.push('/signin')
    }
  }, []);

  const signout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
  };

  return (
    <>
      <Head>
        <title>Note Store</title>
      </Head>
      <div className="bg-[#f5f5f5] h-screen">
        <header>
          <Header user={user} signout={signout}/>
        </header>
        <main className="m-1 flex flex-col xl:flex-row justify-center">
          {/* <FolderList/> */}
          <NotesList user={user} />
        </main>
      </div>
    </>
  );
}
