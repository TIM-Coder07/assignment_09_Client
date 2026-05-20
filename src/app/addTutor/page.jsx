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
import { authClient } from "@/lib/auth-client";

const AddTutorPage = () => {
  const formRef = useRef(null);
const { data: session } = authClient.useSession();
  const onSubmit = async (e) => {
    e.preventDefault();
    
    const formData = Object.fromEntries(new FormData(e.target));
    const updatedFormData = {
    ...formData,
    creatorEmail: session?.user?.email,
  };

    await postData(updatedFormData,);

    formRef.current?.reset();
  };

  return (
    <div className="flex justify-center p-10">
      <Form
        ref={formRef}
        className="flex w-96 flex-col gap-4"
        onSubmit={onSubmit}
      >
        {/* Course Title */}
        <TextField name="courseTitle" isRequired>
          <Label>Course Title</Label>
          <Input placeholder="Complete Mathematics Masterclass" />
        </TextField>

        {/* Course Image */}
        <TextField name="courseImage" isRequired>
          <Label>Course Image URL</Label>
          <Input placeholder="https://..." />
          <Description>Paste image URL here</Description>
        </TextField>

        {/* Tutor Name */}
        <TextField name="tutorName" isRequired>
          <Label>Tutor Name</Label>
          <Input placeholder="Rahim Uddin" />
        </TextField>

        {/* Category */}
        <TextField name="category" isRequired>
          <Label>Subject / Category</Label>
          <select name="category" className="border p-2 rounded w-full">
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="English">English</option>
          </select>
        </TextField>

        {/* Description */}
        <TextField name="description">
          <Label>Description</Label>
          <Input placeholder="Short course description..." />
        </TextField>

        {/* Schedule */}
        <TextField name="classSchedule" isRequired>
          <Label>Class Schedule</Label>
          <Input placeholder="Sun - Thu, 6:00 PM - 7:30 PM" />
        </TextField>

        {/* Fee */}
        <TextField name="courseFee" isRequired>
          <Label>Course Fee (৳)</Label>
          <Input type="number" />
        </TextField>

        {/* Seats */}
        <TextField name="availableSeats" isRequired>
          <Label>Available Seats</Label>
          <Input type="number" />
        </TextField>

        {/* Start Date */}
        <TextField name="startDate" isRequired>
          <Label>Start Date</Label>
          <Input type="date" />
        </TextField>

        {/* Location */}
        <TextField name="location">
          <Label>Location</Label>
          <Input placeholder="Dhaka" />
        </TextField>

        {/* Teaching Mode */}
        <TextField name="teachingMode" isRequired>
          <Label>Teaching Mode</Label>
          <select name="teachingMode" className="border p-2 rounded w-full">
            <option value="">Select mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>
        </TextField>

        {/* Buttons */}
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