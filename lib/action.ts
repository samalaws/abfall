export const getTodayDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };



  // Function to add leading zeros to day and month
const formatDateWithLeadingZeros = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

// Function to find the next upcoming date
export const getNextDate = (today: string, dates: string[]): string | null => {
  // Convert today's date from "de-DE" to a Date object
  const [day, month, year] = today.split('.').map(Number);
  const todayDate = new Date(year, month - 1, day);

  // Convert Datum array from "DD.MM.YYYY" format to Date objects
  const futureDates = dates
    .map(dateStr => {
      const [d, m, y] = dateStr.split('.').map(Number);
      return new Date(y, m - 1, d);
    })
    .filter(date => date > todayDate) // Keep only dates after today
    .sort((a, b) => a.getTime() - b.getTime()); // Sort in ascending order

  // Return the next date formatted with leading zeros, or null if no future dates exist
  return futureDates.length > 0 ? formatDateWithLeadingZeros(futureDates[0]) : null;
};

