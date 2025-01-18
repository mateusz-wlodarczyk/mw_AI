"use client";
import { useMutation } from "@tanstack/react-query";
import TourInfo from "./TourInfo";
import { generateTourResponse } from "@/utils/action";
import toast from "react-hot-toast";
const NewTour = () => {
  const {
    mutate,
    isPending,
    data: tour,
    error,
  } = useMutation({
    mutationFn: async (destination) => {
      const newTour = await generateTourResponse(destination);
      if (newTour) {
        return newTour;
      }
      toast.error("no tokens");
      return null;
    },
    onError: () => {
      toast.error("no tokens ;(");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };
  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4">select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <button type="submit" className="btn btn-primary join-item">
            generate tour
          </button>{" "}
        </div>
      </form>
      <div className="mt-14">{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  );
};
export default NewTour;
