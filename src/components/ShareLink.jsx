import { Link2, Copy, Info } from "lucide-react";
import  { toast } from "react-hot-toast"

const ShareLink = ({ personalLink }) => {

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personalLink);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="rounded-sm border border-[#DDEAE8] bg-[#f9f9f9] p-4 sm:p-7">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="hidden h-24 w-24 shrink-0 items-center justify-center sm:flex">
          <Link2 size={48} strokeWidth={2} className="text-secondary" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-google-sans text-base text-primary font-medium">
            Your personal link
          </h2>
          <p className="mt-2 font-google-sans text-sm text-gray-400">
            Share this link with your friends so they can send you anonymous messages.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row">
            <div className="flex min-h-11 flex-1 items-center rounded-sm border border-gray-200 bg-white px-3 ">
              <span className="truncate font-google-sans text-sm text-primary">
                { personalLink }
              </span>
            </div>
            <button className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-12 font-google-sans
              text-sm text-white sm:mt-0 sm:rounded-l-none" 
              onClick={handleCopy} >
              <Copy size={18} strokeWidth={2} />
              Copy
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Info size={17} strokeWidth={2} className="shrink-0 text-gray-400"/>
            <p className="font-google-sans text-xs text-gray-400">
              Anyone with this link can send you a message anonymously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareLink;