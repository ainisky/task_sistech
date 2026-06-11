import Navbar from '../components/navbar';
import Footer from '../components/footer';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Hot Espresso",
    category: "Coffee",
    price: "Rp40.000",
    description: "A powerful, dark roast shot engineered to overclock your morning brain.",
  },
  {
    id: 2,
    name: "Fiber Latte",
    category: "Coffee",
    price: "Rp45.000",
    description: "Smooth steamed milk poured over signature espresso with a silky cream layer.",
  },
  {
    id: 3,
    name: "Matrix Matcha",
    category: "Tea",
    price: "Rp35.000",
    description: "Premium ceremonial grade green tea whisked with creamy oat milk.",
  },
  {
    id: 4,
    name: "Binary Brownie",
    category: "Bakery",
    price: "Rp41.000",
    description: "Fudgy chocolate brownie block baked with 1s and 0s of pure deliciousness.",
  },
  {
    id: 5,
    name: "Gigabyte Croissant",
    category: "Bakery",
    price: "Rp42.500",
    description: "Flaky, golden-layered French pastry baked fresh every single morning.",
  },
  {
    id: 6,
    name: "Cloud Cold Brew",
    category: "Cold Drinks",
    price: "Rp50.000",
    description: "Slow-steeped cold coffee topped with a thick layer of sweet vanilla cold foam.",
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
        <Navbar />
            <section className="w-full flex flex-col items-center text-center px-4 pt-16 pb-8">
                <h1 className="font-bold text-[64px] md:text-[80px] leading-[100%] tracking-normal text-[#FE75B0]">
                    OUR MENU
                </h1>
                <p className="font-medium text-[20px] md:text-[24px] leading-[140%] tracking-normal text-stone-600 mt-4 max-w-2xl">
                    Carefully calculated recipes crafted to fuel your coding sessions and coffee breaks.
                </p>
            </section>
            <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-24 flex-1">        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MENU_ITEMS.map((item) => (
                    <div 
                    key={item.id} 
                    className="bg-white border border-stone-100 rounded-[16px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group duration-200"
                    >
                    <div>
                        <div className="flex justify-between items-center mb-4">
                        <span className="text-[12px] font-bold uppercase tracking-wider text-[#FE75B0] bg-pink-50 px-3 py-1 rounded-full">
                            {item.category}
                        </span>
                        <span className="text-[20px] font-bold text-stone-800">
                            {item.price}
                        </span>
                        </div>
                        <h3 className="font-bold text-[24px] leading-[110%] text-stone-900 mb-2 group-hover:text-[#FE75B0] transition-colors">
                        {item.name}
                        </h3>
                        <p className="text-stone-500 font-normal text-[15px] leading-[150%]">
                        {item.description}
                        </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-stone-50">
                        <button className="w-full h-[44px] flex items-center justify-center gap-2 rounded-[10px] border-2 border-[#FE75B0] text-[#FE75B0] font-semibold text-[16px] hover:bg-[#FE75B0] hover:text-white transition-all">
                        Add to Order
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </section>
        <Footer />
    </main>
  );
}