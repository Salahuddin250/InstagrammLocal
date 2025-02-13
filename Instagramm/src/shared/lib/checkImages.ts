export const checkImages = (files: File[]) => {
  let err = "";

  const newImages: File[] = [];

  files.forEach((file) => {
    if (!file) return (err = "Выберите фото");

    if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/webp" && file.type !== "image/svg+xml") { return (err = "Выберите другой формат"); }

    if (file.size > 1024 * 1024 * 5) return (err = "Не более 5мб");
    newImages.push(file);
  });

  return {
    err,
    newImages
  };
};
