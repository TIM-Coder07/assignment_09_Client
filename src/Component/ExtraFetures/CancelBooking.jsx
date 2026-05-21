"use client";

import { AlertDialog, Button } from "@heroui/react";

export function CancelBooking({ book, onCancel }) {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button
          disabled={book.status === "cancelled"}
          className={`px-4 py-2 rounded text-white ${
            book.status === "cancelled"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500"
          }`}
        >
          Cancel
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This action will cancel your booking.
                You can’t undo this.
              </p>
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
