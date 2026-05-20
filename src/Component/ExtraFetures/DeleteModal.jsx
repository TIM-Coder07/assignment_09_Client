"use client";

import { cancelById } from "@/lib/dataFetcing";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function DeleteModal({ user, tutor }) {
  const router = useRouter();

  const handleCancelButton = async () => {
    const cancelSession = await cancelById(tutor?._id);
    
    if (cancelSession?.success) {
      toast.success("Cancel Successful");
      router.refresh(); 
    } else {
      toast.error("Failed to cancel");
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger">Cancle Session</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancle session permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                <strong>{user.name}</strong> this will permanently cancle your
                session.This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Skip
              </Button>
              <Button
                onClick={handleCancelButton}
                slot="close"
                variant="danger"
              >
                Cancle
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
