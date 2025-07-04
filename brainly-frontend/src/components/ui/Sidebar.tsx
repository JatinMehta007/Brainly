
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItem";

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72  fixed left-0 top-0 pl-6">
            <div className="pl-4 flex text-2xl pt-8 items-center">
                <div className="pr-2 "> 
                    <img src="./Logo.png" alt="" className="h-9 w-9" />
                </div>
                Brainly
            </div>
        <div className="pt-8 pl-4  ">
            <SideBarItem text="Twitter" icon={<TwitterIcon></TwitterIcon>}/>

            <SideBarItem text="Youtube" icon={<YoutubeIcon></YoutubeIcon>}/>
        </div>
    </div>
}