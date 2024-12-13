export interface ImageUpload {
  public_id: string
  url: string
}

export const imageUpload = async (images: any): Promise<ImageUpload[]> => {
  const newImages = []
  for (const img of images) {
    const formData = new FormData()

    formData.append("file", img)
    formData.append("clound_name", "dbbtjl4l6")
    formData.append("upload_preset", "InstPreset")

    const res = await fetch("https://api.cloudinary.com/v1_1/dbbtjl4l6/upload", {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    console.log(data);

    newImages.push({
      public_id: data.public_id,
      url: data.secure_url
    })
  }

  return newImages
}
