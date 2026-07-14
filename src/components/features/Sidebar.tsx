import { revieweds, Reviewed } from "@/data/revieweds";
import { upcomings, Upcoming } from "@/data/upcoming";

export default function Sidebar() {
    return(
        <nav className="md:border-l-3 border-default border-gray-300 h-full md:px-4">
            <h1 className="text-xl font-bold text-foreground">
                Produtos revisados por nós
            </h1>

            <ul className="py-4 flex flex-col gap-3">
                {revieweds.map((reviewed) => (
                    <li key={reviewed.title} className="flex items-center gap-3 hover:cursor-pointer hover:transition-colors duration-200 hover:text-[#F4320B]">
                        <img src={reviewed.cover} alt={reviewed.title} className="rounded-xl"/>
                         <div className="flex-1 py-4">
                            <h3 className="text-sm font-semibold">
                                {reviewed.title}
                            </h3>
                            <p className="text-xs text-foreground">
                                {reviewed.description}
                            </p>
                        </div>
                        <span className="text-xs font-medium text-foreground">
                            ★ {reviewed.rating}
                        </span>
                    </li>
                ))}
            </ul>

            <h1 className="text-xl font-bold text-foreground">
                Em breve
            </h1>

            <ul className="py-4 flex flex-col">
                {upcomings.map((upcoming) => (
                    <li key={upcoming.title} className="flex gap-3 items-center py-3">
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-bold">
                                    {upcoming.title}
                                </h3>
                                <img src={upcoming.cover} alt={upcoming.title} className="w-12 h-12 rounded-xl object-cover shrink-0"/>
                            </div>
                            <p className="text-xs text-foreground-muted mt-1">
                                {upcoming.description}
                            </p>
                            <p className="text-xs text-brand-primary mt-1 py-2">
                                {upcoming.launchDate} · {upcoming.category}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}