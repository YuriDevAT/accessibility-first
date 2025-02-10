import { QAItem } from '../@types/q-and-a';

export const qaData: QAItem[] = [
  {
    question: 'Can a website really be 100% accessible?',
    answer:
      "Actually, no. When we talk about barrier-free, we are actually talking about low-barrier. People are so individual, in the end you can't make it right for everyone.\nFor example, there are people with visual impairments who need text to be very close together so that they can read it, while others need a little more distance so that they can recognise where one word ends and the next begins.\nThat's why it's always good to give the user options, for example light and dark mode.",
    speaker: 'Julia',
  },
  {
    question: 'How can companies ensure that their products are accessible?',
    answer:
      "The design process is the key moment here, as this is where the blueprints for the entire product are designed.\nFor this reason, either designers need to be familiar with web accessibility and note the expected behaviors in their designs so that developers don't have to guess, or an accessibility specialist needs to be brought in to support the design process and pass on knowledge to the designer.\n\nOf course, the same applies to the development process. The more knowledgeable each team member is, the better.",
    speaker: 'Julia',
  },
  {
    question: 'Do all projects need to include accessibility?',
    answer:
      'Yes. Period.\nWe know it can be overwhelming to look at the WCAG in its entirety, but your target demographic can be an indicator of where to start. Think about what types of disabilities are most common in your audience and what adjustments would be needed.\n\nFor example: If you have a nutrition-tracking service, you might very well have users with type 2 diabetes. Diabetes can lead to a variety of complications, including eye problems from diabetic retinopathy, or nerve damage. Hence, starting with adjustments for low vision and motor impairments would be a solid choice. This type of critical thinking exercise can give you a starting point, and from there on you can continue your research.',
    speaker: 'Laura',
  },
  {
    question: 'Is it okay to use emojis on social media?',
    answer:
      'There is no right answer, only recommendations. Make sure to use them sparingly, only at the beginning or end of a sentence, and only once. Never in the middle, as it disrupts the reading flow for screen reader users. Also not instead of a word, as the meaning can be lost.\n\nEvery person and every screen reader interprets emojis differently. Omitting emojis for these reasons may seem logical, but for some people it is misleading, as they often cannot interpret how what is being said is meant (I am one of them 😉).',
    speaker: 'Julia',
  },
];
