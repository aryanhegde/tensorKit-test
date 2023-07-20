import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useProModal } from "@/hooks/use-pro-model";
import { Badge } from "./ui/badge";
import { toast } from "react-hot-toast";
import {
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Check,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    bgColor: "bg-pink-500/10",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    bgColor: "bg-orange-500/10",
    color: "text-orange-500",
  },

  {
    label: "Audio Generation",
    icon: Music,
    bgColor: "bg-emerald-500/10",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    bgColor: "bg-green-500/10",
    color: "text-green-500",
  },
];

const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-y-4 pb-2 ">
              <p className="font-bold text-lg">Upgrade The TensorKit</p>
              <Badge
                variant={"premium"}
                className="uppercase text-sm py-1 mx-2"
              >
                PRO
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4 ">
                  <div className={cn("p-2 m-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5 mr-3" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            size={"lg"}
            variant={"premium"}
            className="w-full"
            onClick={onSubscribe}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
