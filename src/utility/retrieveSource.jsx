// utility/retrieveSource.jsx

// Load all images in the watches directory
const images = import.meta.glob('../assets/watches/**/*.{png,jpg,jpeg,svg}');

// Create a dictionary to store image sources based on path
const imageSources = {};

// Preload all images
const loadAllImages = async () => {
    await Promise.all(
        Object.entries(images).map(async ([path, importImage]) => {
            const imageModule = await importImage();
            const newPath = path.replace('../', 'src/');
            imageSources[newPath] = imageModule.default // Store src in dictionary
            // console.log(`Loaded: ${newPath} -> ${imageSources[newPath]}`); // Log the loaded image source
        })
    );
    console.log('All images loaded:', imageSources); // Log after all images are loaded
};

// Call this function to preload images once
loadAllImages();

// Function to retrieve the source URL of an image based on path
const retrieveSource = (path) => {
    return imageSources[path] || null; // Return the src if found, otherwise null
};

export { loadAllImages, retrieveSource };
