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

const questions = [

	{
		question: `In sports, What does NBA stands for?`,
		options: [
			`National Bussiness Association`, 
			`National Basketball Association`,
			`Not Boring at All`,
			`National Beef Association`,
		], 
		rightAnswer: 1, 
	}
  {
		question: `In soccer, what body part can't touch the ball`,
		options: [
			`Feets`,
			`Knees`,
			`Hands`, 
			`Head`,
		], 
		rightAnswer: 2, 
	},

	{
		question: `The Olympics are held every how many years?`,
		options: [
			`4 years`, 
			`5 years`,
			`3 years`,
			`6 years`,
		], 
		rightAnswer: 0, 
	},

	{
		question: `Name the largest country`,
		options: [
			`United States`, 
			`Canada`,
			`Russia`,
			`China`,
		], 
		rightAnswer: 2, 
	},

	{
		question: `Name the smallest country`,
		options: [
			`Peru`, 
			`San Marino`,
			`Malta`,
			`The Vatican City`,
		], 
		rightAnswer: 3, 
	},

	{
		question: `Which is the capital of France?`,
		options: [
			`Marsella`, 
			`Paris`,
			`Lyon`,
			`Montpellier`,
		], 
		rightAnswer: 1, 
	},
	{
		question: `What type of creature is Shrek?`,
		options: [
			`Minotaur`, 
			`Elf`,
			`Zombie`,
			`Ogre`,
		], 
		rightAnswer: 3, 
	},
	{
		question: `Who directed Pulp Fiction?`,
		options: [
			`Steven Spielberg`, 
			`Quentin Tarantino`,
			`Martin Scosese`,
			`Christopher Nolan`,
		], 
		rightAnswer: 1, 
	},
	{
		question: `Which color are the Na'Vi in Avatar?`,
		options: [
			`Purple`, 
			`Black`,
			`Blue`,
			`Red`,
		], 
		rightAnswer: 2, 
	},
	{
		question: `Is pluto a planet?`,
		options: [
			`Yes`, 
			`No`,
			`Maybe`,
			`I don't know`,
		], 
		rightAnswer: 1, 
	},
	{
		question: `What is the smallest unit of matter?`,
		options: [
			`Nucleus`, 
			`Atom`,
			`Neutrons`,
			`Protons`,
		], 
		rightAnswer: 1, 
	},
	{
		question: `How many elements are in the periodic table?`,
		options: [
			`115`, 
			`117`,
			`118`,
			`114`,
		], 
		rightAnswer: 2, 
	},
	{
		question: `Jared Leto is the frontman of what band?`,
		options: [
			`30 Seconds to Mars`, 
			`Greenday`,
			`One Direcion`,
			`The Beatles`,
		], 
		rightAnswer: 0, 
	},
	{
		question: `Queen's first music video?`,
		options: [
			`Under Pressure`, 
			`Don't Stop Me Now`,
			`I Want to Break Free`,
			`Bohemian Rhapsody`,
		], 
		rightAnswer: 3, 
	},
	{
		question: `Michael Jackson Thriller music video feature what creature?`,
		options: [
			`Skeletons`, 
			`Zombies`,
			`Ogres`,
			`Elfs`,
		], 
		rightAnswer: 1, 
	},

]
