import {ClassRoom} from './0-classroom'

export default function initializeRooms (){
  super(maxStudentsSize);
  const roomSize = [19, 20, 34];
  const classRooms = [];

  for (const size of roomSizes) {
    classrooms.push(new ClassRoom(size));
  }

  return classrooms;
}
