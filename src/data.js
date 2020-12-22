import { v4 as uuidv4 } from 'uuid';

export const data = [
  {
    title: 'Backlog',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text: 'Kaputte Tastatur ersetzen',
      },
      {
        id: uuidv4(),
        text: 'Schreibtisch für neuen Mitarbeiter einrichten',
      },
      {
        id: uuidv4(),
        text: 'Software-Lizenz kaufen',
      },
      {
        id: uuidv4(),
        text: 'Ski in den Service bringen',
      },
      {
        id: uuidv4(),
        text: 'Essen einkaufen',
      },
    ],
  },
  {
    title: 'In Bearbeitung',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text: 'Kaputte Tastatur ersetzen',
      },
      {
        id: uuidv4(),
        text: 'Schreibtisch für neuen Mitarbeiter einrichten',
      },
      {
        id: uuidv4(),
        text: 'Software-Lizenz kaufen',
      },
    ],
  },
];
