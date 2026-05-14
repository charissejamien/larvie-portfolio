export default function Header() {

    const nav = [
        {label: "Work", link: "/work"},
        {label: "About", link: "/about"},
        {label: "Projects", link: "/projects"},
        {label: "Contact", link:"/contacts"}
    ];

    return(
        <div className="flex justify-between p-5">
            <p>Larviee</p>
            <div className="flex gap-5">
                {nav.map((n, index) => (
                    <p key={index}>{n.label}</p>
                ))}
            </div>
            <button>Hire me</button>
        </div>
    );  
}