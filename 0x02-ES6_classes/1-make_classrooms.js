import {ClassRoom} from './0-classroom'

export default function initializeRooms (){
  const roomSize = [19, 20, 34];
  const classrooms = [];

  for (const size of roomSize) {
    classrooms.push(new ClassRoom(size));
  }

  return classrooms;
}
