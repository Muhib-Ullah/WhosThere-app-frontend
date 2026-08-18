export const formatTime = (dateString) => {
  const date = new Date(
    dateString.endsWith("Z") ? dateString : `${dateString}Z`
  );

  const now = new Date();

  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  }

  const minutes = Math.floor(diffInSeconds / 60);

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "min" : "mins"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days < 7) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  return date.toLocaleDateString();
};