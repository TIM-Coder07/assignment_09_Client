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
import { toast } from "react-hot-toast";

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

    try {
      await postData(updatedFormData);

      toast.success(" Tutor added successfully! 🎉");

      formRef.current?.reset();
    } catch (error) {
      console.log(error);
      toast.error("❌ Failed to add tutor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Add New Tutor</h1>
          <p className="text-gray-500 text-sm">
            Fill up the form to create a new tutor session
          </p>
        </div>

        {/* Form */}
        <Form ref={formRef} className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Course Title */}
          <TextField name="courseTitle" isRequired>
            <Label>Course Title</Label>
            <Input placeholder="Complete Mathematics Masterclass" />
          </TextField>

          {/* Image */}
          <TextField name="courseImage" isRequired>
            <Label>Course Image URL</Label>
            <Input placeholder="https://..." />
            <Description>Paste a valid image URL</Description>
          </TextField>

          {/* Tutor Name */}
          <TextField name="tutorName" isRequired>
            <Label>Tutor Name</Label>
            <Input placeholder="Rahim Uddin" />
          </TextField>

          {/* Category */}
          <TextField name="category" isRequired>
            <Label>Subject / Category</Label>
            <select className="border p-2 rounded w-full">
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

          {/* Fee + Seats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <TextField name="courseFee" isRequired>
              <Label>Fee (৳)</Label>
              <Input type="number" />
            </TextField>

            <TextField name="availableSeats" isRequired>
              <Label>Seats</Label>
              <Input type="number" />
            </TextField>
          </div>

          {/* Date + Location */}
          <div className="grid grid-cols-2 gap-4">
            <TextField name="startDate" isRequired>
              <Label>Start Date</Label>
              <Input type="date" />
            </TextField>

            <TextField name="location">
              <Label>Location</Label>
              <Input placeholder="Dhaka" />
            </TextField>
          </div>

          {/* Teaching Mode */}
          <TextField name="teachingMode" isRequired>
            <Label>Teaching Mode</Label>
            <select className="border p-2 rounded w-full">
              <option value="">Select mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 w-full"
            >
              <Check /> Submit
            </Button>

            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddTutorPage;
