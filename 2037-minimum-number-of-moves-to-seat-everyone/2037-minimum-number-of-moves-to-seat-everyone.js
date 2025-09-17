/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  const sortedSeats = seats.slice().sort((a, b) => a - b);
  const sortedStudents = students.slice().sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < sortedStudents.length; i++) {
    const diff = Math.abs(sortedStudents[i] - sortedSeats[i]);

    sum += diff;
  }

  return sum;
};
