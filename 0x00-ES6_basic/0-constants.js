// function taskFirst to instantiate variables using const
// function taskNext to instantiate variables using let

export const taskFirst => 'I prefer const when I can.';

export const getLast => 'is okay' ;


export taskNext () {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

export const taskNext => 'But sometimes let';
