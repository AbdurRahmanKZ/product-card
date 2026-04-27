import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter(number => number >= 5);

const foodItems = [
  'bread',
  'milk',
  'rice',
  'beef',
  'juice'
];
const riceItem = foodItems.find(foodItem => foodItem === 'rice');
const getReversedArray = array => [...array].reverse();
const reversedFoodItems = getReversedArray(foodItems);

const commentsWithComEmails = comments.filter(comment =>
  comment.email.includes('.com')
);

const setPostIdByCommentId = comments => comments.map(comment => ({
  ...comment,
  postId: comment.id >= 5 ? 2 : 1
}));
const commentsWithUpdatedPostId = setPostIdByCommentId(comments);

const getCommentIdAndName = comments => comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
const commentsWithIdAndName = getCommentIdAndName(comments);

const addIsInvalidFlag = comments => comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
const commentsWithInvalidFlag = addIsInvalidFlag(comments);

const getEmailsWithMap = comments => comments.map(({ email }) => ({ email }));
const commentEmailsFromMap = getEmailsWithMap(comments);
const getEmailsWithReduce = comments => comments.reduce((acc, { email }) => {
  acc.push({ email });
  return acc
}, []);
const commentEmailsFromReduce = getEmailsWithReduce(comments);

const emailsAsString = commentEmailsFromMap.toString();
const emailsAsStringWithComma = commentEmailsFromMap.join(', ');