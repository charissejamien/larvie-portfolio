export default function Hero(){
    return(
        <div className="w-[80%] mx-auto flex flex-col justify-center items-center">
            <p>Game Developer</p>
            <p className="text-[44px] font-semibold"> Turning Input into</p>
            <p className="text-[60px] bg-gradient-to-r from-[#A3B087] to-[#E2E8CE] bg-clip-text text-transparent font-semibold italic brightness-120">Impact.</p>
            <p className="text-center">I'm Larviee, I bridge creative vision and production reality. From roadmaps to release, I keep teams
                aligned and projects shipping on time.
            </p>
            <div className="flex gap-10 mt-10">
                <button className="text-[14px] text-black bg-white rounded-2xl px-6 py-2 ">View Shipped Work</button>
                <button>Get in touch</button>
            </div>
        </div>
    );
}