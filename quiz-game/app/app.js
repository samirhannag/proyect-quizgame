const question = document.querySelector('.question'), 
		numberOfQuestion = document.querySelector('.question__number'),
		numberOfAllQuestions = document.querySelector('.question__all-numbers')
;

const options = document.querySelectorAll('.answers__option');
const option_1 = document.querySelector('.answers__option-1'), 
      option_2 = document.querySelector('.answers__option-2'), 
      option_3 = document.querySelector('.answers__option-3'), 
      option_4 = document.querySelector('.answers__option-4')
;

const nextBtn = document.querySelector('.quiz__btn');

const correctAnswers_popup = document.querySelector('.popup__correct'), 
		numberOfAllQuestions_popup = document.querySelector('.popup__all-questions'), 
		tryAgainBtn_popup = document.querySelector('.popup__try-again');
;

const popup = document.querySelector('.popup');

let indexOfQuestions, 
	 indexOfPage = 0;

let score = 0;