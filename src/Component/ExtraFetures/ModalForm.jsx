"use client";

import { Mail, Send } from "lucide-react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { handleBookNow } from "@/lib/dataFetcing";
import { useRouter } from "next/navigation";

export function ModalForm({ user, tutorDetails }) {
  const { email } = user;
  const { tutorName, category } = tutorDetails;
  const router = useRouter();


  const handelBooking = (e) => {
    e.preventDefault();
    handleBookNow(user, tutorDetails);
      router.refresh(); 
  };

  return (
    <Modal>
      {/* TRIGGER BUTTON */}
      <Button className=" text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition">
        Book Session
      </Button>

      <Modal.Backdrop className="bg-black/50 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-lg rounded-3xl overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header className="p-6 border-b border-white/10">
              <Modal.Icon className="bg-white/10 text-cyan-300 rounded-xl p-3">
                <Mail className="size-6" />
              </Modal.Icon>

              <Modal.Heading className="text-white text-2xl font-bold mt-3">
                Book Your Session
              </Modal.Heading>

              <p className="mt-2 text-sm text-gray-300">
                Fill up the form below to schedule your tutoring session.
              </p>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <Surface className="bg-transparent">
                <form className="flex flex-col gap-4">
                  <TextField name="name">
                    <Label className="text-gray-300">Name</Label>
                    <Input className="h-12 rounded-xl bg-white/5 border border-white/10 text-white" />
                  </TextField>
                  <TextField name="email">
                    <Label className="text-gray-300">Email</Label>
                    <Input
                      value={email}
                      className="h-12 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </TextField>
                  <TextField name="phone">
                    <Label className="text-gray-300">Phone</Label>
                    <Input className="h-12 rounded-xl bg-white/5 border border-white/10 text-white" />
                  </TextField>

                  {/* tutor Name */}
                  <TextField name="tutorName">
                    <Label className="text-gray-300">Tutor Name</Label>
                    <Input
                      value={tutorName}
                      className="h-12 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </TextField>

                  {/* subject */}
                  <TextField name="subject">
                    <Label className="text-gray-300">Subject</Label>
                    <Input
                      value={category}
                      className="h-12 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            {/* FOOTER */}
            <Modal.Footer className="p-6 border-t border-white/10 flex gap-3">
              <Button
                slot="close"
                className="flex-1 bg-white/10 text-white hover:bg-white/20 rounded-xl"
              >
                Cancel
              </Button>

              <Button
                onClick={handelBooking}
                slot="close"
                className="flex-1  text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                <Send className="size-4 mr-2" />
                Book
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
