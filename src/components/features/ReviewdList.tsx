import { Reviewed } from "@/types";

interface ReviewedListProps {
    reviewed: Reviewed;
}

export default function ReviewdList({ reviewed } : ReviewedListProps) {
    return(       
        <div key={reviewed.title} className="flex items-center gap-3 hover:cursor-pointer hover:transition-colors duration-200 hover:text-[#F4320B]">
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
        </div>     
    )
}