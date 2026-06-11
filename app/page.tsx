import Footer from './components/footer';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />      
      <section className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-103px)] px-4 text-center">
        <h1 className="text-[100px] font-bold leading-[100%] tracking-normal text-[#FF74B1] max-w-5xl">
          SISTECH CAFE
        </h1>
        <p className="font-medium text-[24px] text-[#464545] leading-[100%] tracking-normal">
          Local Coffee brewed by Extraordinary Women in Indonesia
        </p>
        <button className="flex items-center justify-center bg-[#FE75B0] w-[184px] h-[56px] rounded-[10px] p-[10px] gap-[10px] justify-center text-white px-5 py-2.5 whitespace-nowrap text-[24px] font-medium hover:bg-[#FE75B0]/80 transition-all shadow-sm mt-8">
          See Our Menu
        </button>
      </section>
      <Footer />
    </main>
  );
}