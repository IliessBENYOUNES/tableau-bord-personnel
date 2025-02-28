/**
 * Formate un nombre de secondes en chaîne de caractères au format HH:MM:SS
 * @param {number} seconds - Nombre de secondes à formater
 * @returns {string} - Temps formaté (HH:MM:SS)
 */
export const formatTime = (seconds) => {
  // Calcul des heures, minutes et secondes
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  // Formatage avec padding de zéros
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
