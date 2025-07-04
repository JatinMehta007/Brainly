import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }) {
  const titlRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titlRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          "Authorization": localStorage.getItem("token"),
        },
      }
    );
    onClose(); 
  }
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center"></div>
          <div className="w-screen h-screen  fixed top-0 left-0 opacity-100 flex justify-center items-center">
            <div className="bg-white  p-4 rounded  ">
              <div className="flex justify-end ">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input reference={titlRef} placeholder={"Title"}></Input>
                <Input reference={linkRef} placeholder={"Link"}></Input>
              </div>
              <div>
                <h1>Type</h1>
                <div className="flex gap-1 p-4 justify-center">
                  <Button
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  ></Button>
                  <Button
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  ></Button>
                </div>
              </div>
              <div className="flex justify-center ">
                <Button
                  onClick={addContent}
                  variant="primary"
                  text="Submit"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
