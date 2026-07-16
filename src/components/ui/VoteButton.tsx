interface VotesButtonProps {
    votes: string;
}

export default function VoteButton({ votes } : VotesButtonProps) {
    return(
        <button className="flex flex-col items-center px-3 py-1.5 border-2 border-[#cfd8dc] rounded-md hover:border-[#F4320B] hover:transition-colors duration-200 hover:text-[#F4320B]">
            <span className="text-xs">▲</span>
            <span className="text-sm font-semibold text-foreground">{votes}</span>
        </button>
    )
}