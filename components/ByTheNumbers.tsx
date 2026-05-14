export default function ByTheNumbers() {

    const experience = [
        {description: "Total Commission Earned", num: "50+"},
        {description: "On Platform years", num: "6"},
        {description: "Years as Developer", num:"3"}
    ];

    return(
        <div className="mx-5">
            <p className="text-[32px] font-semibold">Built on Experience, <br /> Defined by Results.</p>
            <div className="flex gap-2">
                {experience.map((e) => (
                    <div className="border rounded-md p-2 w-fit text-center">
                        <p className="text-[52px] bg-gradient-to-t from-[#A3B087] to-[#E2E8CE] bg-clip-text text-transparent font-extrabold">{e.num}</p>
                        <p>{e.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}