"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Input, Label, TextField, Modal, Surface } from "@heroui/react";
import { Mail, Send } from "lucide-react";
import { handleBookNow } from "@/lib/dataFetcing";
import { toast } from "react-hot-toast";

export function ModalForm({ user, tutorDetails }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // If user not logged in
  if (!user) {
    return (
      <Button onClick={() => toast.error("Please login first")}>
        Book Session
      </Button>
    );
  }

  const handelBooking = async (e) => {
    e.preventDefault();

    setLoading(true);

    const bookingData = {
      studentName: user.displayName,
      studentEmail: user.email,
    };

    const result = await handleBookNow(user, tutorDetails);

    setLoading(false);

    if (result?.success) {
      toast.success(result.message || "Booking successful");

      // IMPORTANT FIX → go to MyBooked page
      router.push("/myBooked");

      // refresh data
      router.refresh();
    } else {
      toast.error(result?.message || "Booking failed");
    }
  };

  return (
    <Modal>
      <Button className="text-white px-6 py-2 rounded-xl">
        Book Session
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>

            <Modal.Header>
              <Modal.Icon>
                <Mail />
              </Modal.Icon>

              <Modal.Heading>
                Book Your Session
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <Surface>
                <form className="flex flex-col gap-4">

                  <TextField name="name">
                    <Label>Name</Label>
                    <Input defaultValue={user?.displayName} />
                  </TextField>

                  <TextField name="email">
                    <Label>Email</Label>
                    <Input value={user?.email} readOnly />
                  </TextField>

                  <TextField name="phone">
                    <Label>Phone</Label>
                    <Input placeholder="01XXXXXXXXX" />
                  </TextField>

                  <TextField name="tutor">
                    <Label>Tutor</Label>
                    <Input value={tutorDetails.tutorName} readOnly />
                  </TextField>

                  <TextField name="subject">
                    <Label>Subject</Label>
                    <Input value={tutorDetails.category} readOnly />
                  </TextField>

                  <Button
                    onClick={handelBooking}
                    disabled={loading}
                  >
                    <Send className="mr-2" />
                    {loading ? "Booking..." : "Book Now"}
                  </Button>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}