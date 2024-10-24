export const getCVsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cvs")) || [];
};

export const saveCVToLocalStorage = (cv) => {
  const cvs = getCVsFromLocalStorage();
  localStorage.setItem("cvs", JSON.stringify([...cvs, cv]));
};
