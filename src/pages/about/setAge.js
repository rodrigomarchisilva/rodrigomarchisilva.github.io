export default function setAge() {
  const myBirthDate = new Date(1992, 9, 3);
  const currentDate = new Date();
  var age = currentDate.getFullYear() - myBirthDate.getFullYear();
  const m = currentDate.getMonth() - myBirthDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < myBirthDate.getDate())) {
    age--;
  }
  return age;
}