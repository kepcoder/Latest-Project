
const StoreSection = () => {
  return (
    <>
<div className="store-section relative w-full h-screen overflow-hidden">
  <img src="/images/store-section.svg"
    alt="store-img"
    className="w-full h-full object-cover object-center"/>

  <div
    className="store-text p-2 z-20 absolute top-20 left-16 w-[40%]
               max-md:w-[90%] max-md:top-[30%] max-md:left-1/2 max-md:-translate-x-1/2
               max-md:text-center"
  >
    <h1 className="text-milk font-[sohne-Bold] text-8xl max-md:text-5xl">Where To</h1>
    <h1 className="bg-[#D4984F] text-7xl max-md:text-4xl font-[sohne-Bold] text-center rotate-3 pb-2">
      Purchase
    </h1>
    <div className="pt-15 w-2/3 max-md:w-full max-md:pt-5 text-xl font-[Sohne-BoldItalic]">
      <p className="text-milk">
        Buy Our Feastables at your local store or get them delivered (to your door)
      </p>
    </div>
    <button
      className="text-milk bg-black mt-10 font-[Kanit-BlackItalic] cursor-pointer
                 rounded-4xl p-5 text-2xl max-md:mt-6 max-md:text-xl">
      <a href="https://feastables.com/pages/find-a-store">Find A Store</a>
    </button>
  </div>



</div>

  <div className='w-full flex flex-col bg-milk items-center leading-22 max-[750px]:leading-12'>
  <h1 className='text-[8vh] sm:text-[10vh] md:text-[12vh] lg:text-[15vh] uppercase text-brown font-[nukku2] text-center'>find us</h1>
  <p className='text-[8vh] sm:text-[10vh] md:text-[12vh] lg:text-[15vh] uppercase text-brown font-[nukku2] -rotate-3 text-center'>At</p>
  <h1 className='text-[8vh] sm:text-[10vh] md:text-[12vh] lg:text-[15vh] uppercase text-brown font-[nukku2] text-center'>these Stores</h1>

  <div className="store-img grid grid-cols-2 md:grid-cols-3 gap-6 p-10 pb-25">
    <img src="/images/walmart.svg" alt="Walmart"  />
    <img src="/images/kroger.svg" alt="Kroger"  />
    <img src="/images/eleven.avif" alt="7 Eleven"  />
    <img src="/images/albertsons.svg" alt="Albertsons"  />
    <img src="/images/samclub.avif" alt="Sam's Club"  />
    <img src="/images/target.avif" alt="Target" />
  </div>
  </div>
</>
)
}

export default StoreSection
