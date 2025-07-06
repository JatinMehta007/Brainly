// import { useState } from 'react'
import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/Content";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refesh} = useContent();

  useEffect(()=>{
    refesh();
  },[modalOpen])

  return (
    <div>
      <SideBar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon size="md"></PlusIcon>}
            variant="primary"
            text="Add Content "
            size="md"
          ></Button>
          <Button
          onClick={async ()=>{
            const responses = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                share : true 
            },{
                headers:{
                    "Authorization" : localStorage.getItem("token")
                }
            });
         const shareUrl = `http://localhost:5173/share/${responses.data.hash}`;
         navigator.clipboard.writeText(shareUrl);
         alert("the url was copied to your clipboard");
          }}
            startIcon={<ShareIcon size="md"></ShareIcon>}
            variant="secondary"
            text="Share Brain"
            size="md"
          ></Button>
        </div>
        <div className="flex gap-4 flex-wrap ">
          {contents.map(({ title, type, link }) => (
            <Card title={title} type={type} link={link}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
