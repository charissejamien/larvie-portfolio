export default function Disciplines() {

    const disciplines = [
        {title: "Project Management", description:"Sprint planning, roadmaps, risk mitigation and steakholder communication -- every wheel turning, always."},
        {title: "Game Production", description:"From vertical slice to gold. Aligning art, design and engineering to one north star without killing creativity."},
        {title: "Live Ops and Launch", description:"Post-launch pipeline design, seasonal content delivery and player-facing release coordination."}
    ]

    return(
        <div className="mx-10">
            <p className="text-[32px] font-semibold">Three disciplines.</p>
            <p className="text-[36px] font-semibold italic bg-gradient-to-r from-[#A3B087] to-[#FFFFFF] bg-clip-text text-transparent">One calm hand.</p>
            <div className="flex flex-col gap-3 mt-5 md:flex">
                {disciplines.map((d, index) => (
                    <div key={index} className="border border-gray-700 bg-[#A3B087]/10 p-6 rounded-xl flex flex-col gap-2 hover:border-[#A3B087] hover:shadow-sm shadow-[#A3B087]">
                        <p className="text-[24px] font-semibold">{d.title}</p>
                        <p className="text-[14px] font-medium">{d.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}