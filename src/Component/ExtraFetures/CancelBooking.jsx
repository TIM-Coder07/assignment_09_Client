"use client";

import { AlertDialog, Button } from "@heroui/react";

export function CancelBooking({ book, onCancel }) {
  const isCancelled = book.status === "cancelled";

  if (isCancelled) {
    return (
      <Button
        disabled
        className="px-4 py-2 rounded bg-gray-400 text-white cursor-not-allowed"
      >
        Cancelled
      </Button>
    );
  }

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button className="px-4 py-2 rounded bg-red-500 text-white">
          Cancel
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel booking?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>This action will cancel your booking. You can’t undo this.</p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                No
              </Button>

              <Button
                onClick={() => onCancel(book._id)}
                className="px-4 py-2 rounded bg-red-500 text-white"
              >
                Confirm Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
