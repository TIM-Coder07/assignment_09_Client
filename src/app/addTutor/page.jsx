"use client";

import { useRef } from "react";
import { postData } from "@/lib/dataFetcing";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  Description,
} from "@heroui/react";

const AddTutorPage = () => {
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    const result = await postData(formData);

    // console.log("postData result:", result);

    formRef.current?.reset();
  };

  return (
    <div className="flex justify-center p-10">
      <Form
        ref={formRef}
        className="flex w-96 flex-col gap-4"
        onSubmit={onSubmit}
      >
        <TextField name="name" isRequired>
          <Label>Tutor Name</Label>
          <Input />
        </TextField>

        <TextField name="photo" isRequired>
          <Label>Photo URL</Label>
          <Input />
          <Description>Use image link</Description>
        </TextField>

        <TextField name="email" isRequired type="email">
          <Label>Email</Label>
          <Input />
        </TextField>

        <TextField name="subject" isRequired>
          <Label>Subject</Label>
          <Input />
        </TextField>

        <TextField name="availability" isRequired>
          <Label>Availability</Label>
          <Input />
        </TextField>

        <TextField name="fee" isRequired>
          <Label>Fee</Label>
          <Input type="number" />
        </TextField>

        <TextField name="slot" isRequired>
          <Label>Slot</Label>
          <Input type="number" />
        </TextField>

        <TextField name="startDate" isRequired>
          <Label>Start Date</Label>
          <Input type="date" />
        </TextField>

        <TextField name="institution">
          <Label>Institution</Label>
          <Input />
        </TextField>

        <TextField name="location">
          <Label>Location</Label>
          <Input />
        </TextField>

        <TextField name="mode" isRequired>
          <Label>Teaching Mode</Label>

          <select name="mode" className="border p-2 rounded w-full">
            <option value="">Select mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check /> Submit
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTutorPage;