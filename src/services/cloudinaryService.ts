export async function uploadToCloudinary(
  file:File
){

  const cloudName="prciawn5";

  const uploadPreset="nestoria_uploads";


  const formData=new FormData();


  formData.append(
    "file",
    file
  );


  formData.append(
    "upload_preset",
    uploadPreset
  );


  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method:"POST",
      body:formData,
    }
  );


  const result = await response.json();



  if(!response.ok){

    console.log(result);

    throw new Error(
      result?.error?.message || "Cloudinary upload failed"
    );

  }


  return result.secure_url;

}
