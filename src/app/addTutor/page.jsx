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
    await postData(formData);

    formRef.current?.reset();
  };

  return (
    <div className="flex justify-center p-10">
      <Form
        ref={formRef}
        className="flex w-96 flex-col gap-4"
        onSubmit={onSubmit}
      >

        {/* Tutor Name */}
        <TextField name="tutorName" isRequired>
          <Label>Tutor Name</Label>
          <Input />
        </TextField>

        {/* Photo */}
        <TextField name="tutorImage" isRequired>
          <Label>Photo URL (imgbb / image link)</Label>
          <Input />
          <Description>Paste image URL here</Description>
        </TextField>

        {/* Subject / Category */}
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

        {/* Availability */}
        <TextField name="classSchedule" isRequired>
          <Label>Available Days & Time</Label>
          <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" />
        </TextField>

        {/* Hourly Fee */}
        <TextField name="courseFee" isRequired>
          <Label>Hourly Fee</Label>
          <Input type="number" />
        </TextField>

        {/* Total Slot */}
        <TextField name="availableSeats" isRequired>
          <Label>Total Slot</Label>
          <Input type="number" />
        </TextField>

        {/* Start Date */}
        <TextField name="startDate" isRequired>
          <Label>Session Start Date</Label>
          <Input type="date" />
        </TextField>

        {/* Institution + Experience */}
        <TextField name="institution">
          <Label>Institution & Experience</Label>
          <Input placeholder="Dhaka University - 4 Years" />
        </TextField>

        {/* Location */}
        <TextField name="location">
          <Label>Location (Area/City)</Label>
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

        {/* Description (optional but useful) */}
        <TextField name="description">
          <Label>Description</Label>
          <Input placeholder="Short course description..." />
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