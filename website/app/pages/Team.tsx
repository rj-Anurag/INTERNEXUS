
import { TeamLayout } from "../components/ui/layout-grid"

export const Team = () => {
    return(
        <div className="mt-20">
            <div>
                <h1 className="text-[80px] font-bold font-sans text-white ml-[20rem]">Meet Our Team</h1>
                <h2 className="text-[20px]  font-sans text-white ml-[20rem]">"Hover and click over our team member's cards to view <span className="text-blue-600">detailed profiles</span> and <span className="text-blue-600">Founder's Note</span>."</h2>
                
            </div>
            <div>
             
                <TeamLayout />
            </div>
        </div>
    )
}