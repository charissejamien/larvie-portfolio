export default function TrustedBy() {

    const companies = ["Air Soft Arena Studios", "JJ Games Studio", "Doggo Studio Presents"];

    return(
        <div className="mx-5">
            <p>Trusted By</p>
            <div className="flex gap-3">
                {companies.map((c) => (
                    <p>{c}</p>
                ))}
            </div>
        </div>
    );
}