export default function taskBlock (trueOrFalse) {
  const task = false;
  const task2 = true;

  function conditionalBlock () {
    let task = false;
    let task2 = true;

    if (trueOrFalse) {
      task = true;
      task2 = false;
    }

    return [task, task2];
  }

  return conditionalBlock();
}
