"use client";

import { useState } from "react";

export default function ImageUpload() {

  const [images, setImages] = useState<string[]>([]);


  function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    if (!event.target.files) return;


    const files = Array.from(event.target.files).slice(0, 5);


    const previews = files.map((file) =>
      URL.createObjectURL(file)
    );


    setImages(previews);

  }


  return (

    <div className="rounded-lg border border-dashed p-5">


      <label className="cursor-pointer text-sm font-semibold text-[#0B2E6B]">

        Upload Property Images (Maximum 5)


        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          className="mt-3 block w-full text-sm"
        />

      </label>


      <p className="mt-3 text-xs text-gray-500">
        Uploaded images will carry the Nestoria watermark after storage processing.
      </p>



      {images.length > 0 && (

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">

          {images.map((image) => (

            <div
              key={image}
              className="overflow-hidden rounded-lg border"
            >

              <img
                src={image}
                alt="Property preview"
                className="h-24 w-full object-cover"
              />

            </div>

          ))}

        </div>

      )}


    </div>

  );
}
