import { Upcoming } from "@/types";

interface UpcomingListProps {
    upcoming: Upcoming;
}

export default function UpcomingList({ upcoming } : UpcomingListProps) {
    return(  
        <div className="flex gap-3 items-center py-3">
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
        </div>
    )
}