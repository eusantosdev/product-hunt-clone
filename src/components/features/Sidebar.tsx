import { revieweds } from "@/data/revieweds";
import { upcomings } from "@/data/upcomings";

import ReviewdList from "./ReviewdList";
import UpcomingList from "./UpcomingList";

export default function Sidebar() {
    return(
        <nav className="md:border-l-3 border-default border-gray-300 h-full md:px-4">
            <ul className="py-4 flex flex-col gap-3">
                <h1 className="text-xl font-bold text-foreground">
                    Produtos revisados por nós
                </h1>
                {revieweds.map((reviewed) => (
                    <ReviewdList 
                    key={reviewed.title}
                    reviewed={reviewed}
                    />
                ))}
            </ul>

            <ul className="py-4 flex flex-col gap-3">
                <h1 className="text-xl font-bold text-foreground">
                    Em breve
                </h1>
                {upcomings.map((upcoming) => (
                    <UpcomingList 
                    key={upcoming.title}
                    upcoming={upcoming}
                    />
                ))}
            </ul>
        </nav>
    )
}