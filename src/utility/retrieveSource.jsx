const images = import.meta.glob("../assets/watches/**/*.{png,jpg,jpeg,svg}");

const imageSources = {};

const loadAllImages = async () => {
  await Promise.all(
    Object.entries(images).map(async ([path, importImage]) => {
      const imageModule = await importImage();
      const newPath = path.replace("../", "src/");
      imageSources[newPath] = imageModule.default;
    })
  );
};

loadAllImages();

const retrieveSource = (path) => {
  return imageSources[path] || null;
};

export { loadAllImages, retrieveSource };
