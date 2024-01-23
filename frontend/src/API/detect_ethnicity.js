export const detect_ethnicity = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/detect_ethnicity", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const result = await response.json();
      return "Dominant Race: " + result.dominant_race;
    } else {
      return "Error: " + response.statusText;
    }
  } catch (error) {
    return "Error: " + error.message;
  }
};
