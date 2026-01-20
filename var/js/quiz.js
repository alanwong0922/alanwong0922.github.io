// 1. set up  quiz config
/**
 * Quiz Configuration
 * - question: The question prompt
 * - correctAnswer: The correct answer as an array of characters
 * - charList: The list of characters to choose from
 */
const quizConfig = [
 {
    question: "李白《靜夜思》「_____，疑是地上霜。舉頭望明月，低頭思故鄉。」",
    correctAnswer: ['床', '前', '明', '月', '光'],
    charList: [
        '床', '前', '明', '月', '光', '舉', '頭', '望', '明', '月',
        '低', '頭', '思', '故', '鄉', '春', '眠', '不', '覺', '曉',
        '處', '處', '聞', '啼', '鳥', '夜', '來', '風', '雨', '聲'
    ]
 },
 {
    question: "「李白《靜夜思》「床前明月光，疑是地上霜。_____，低頭思故鄉。」",
    correctAnswer: ['舉', '頭', '望', '明', '月'],
    charList: [
        '舉', '頭', '望', '明', '月', '床', '前', '光', '低', '思',
        '故', '鄉', '春', '眠', '不', '覺', '曉', '處', '聞', '啼',
        '鳥', '夜', '來', '風', '雨', '聲', '花', '落', '知', '多'
    ]
 },
 {
    question: "李白《靜夜思》「床前明月光，疑是地上霜。舉頭望明月，_____。」",
    correctAnswer: ['低', '頭', '思', '故', '鄉'],
    charList: [
        '低', '頭', '思', '故', '鄉', '床', '前', '明', '月', '光',
        '舉', '望', '春', '眠', '不', '覺', '曉', '處', '聞', '啼',
        '鳥', '夜', '來', '風', '雨', '聲', '花', '落', '知', '多'
    ]
 },
 {
    question: "孟浩然《春曉》「_____，處處聞啼鳥。夜來風雨聲，花落知多少。」",
    correctAnswer: ['春', '眠', '不', '覺', '曉'],
    charList: [
        '春', '眠', '不', '覺', '曉', '處', '處', '聞', '啼', '鳥',
        '夜', '來', '風', '雨', '聲', '花', '落', '知', '多', '少',
        '床', '前', '明', '月', '光', '舉', '頭', '望', '低', '思'
    ]
 },
 {
    question: "孟浩然《春曉》「春眠不覺曉，_____。夜來風雨聲，花落知多少。」",
    correctAnswer: ['處', '處', '聞', '啼', '鳥'],
    charList: [
        '處', '處', '聞', '啼', '鳥', '春', '眠', '不', '覺', '曉',
        '夜', '來', '風', '雨', '聲', '花', '落', '知', '多', '少',
        '床', '前', '明', '月', '光', '舉', '頭', '望', '低', '思'
    ]
 },
 {
    question: "孟浩然《春曉》「春眠不覺曉，處處聞啼鳥。_____，花落知多少。」",
    correctAnswer: ['夜', '來', '風', '雨', '聲'],
    charList: [
        '夜', '來', '風', '雨', '聲', '春', '眠', '不', '覺', '曉',
        '處', '處', '聞', '啼', '鳥', '花', '落', '知', '多', '少',
        '床', '前', '明', '月', '光', '舉', '頭', '望', '低', '思'
    ]
 },
 {
    question: "孟浩然《春曉》「春眠不覺曉，處處聞啼鳥。夜來風雨聲，_____。」",
    correctAnswer: ['花', '落', '知', '多', '少'],
    charList: [
        '花', '落', '知', '多', '少', '春', '眠', '不', '覺', '曉',
        '處', '處', '聞', '啼', '鳥', '夜', '來', '風', '雨', '聲',
        '床', '前', '明', '月', '光', '舉', '頭', '望', '低', '思'
    ]
 },
 {
    question: "王之渙《登鸛雀樓》「_____，黃河入海流。欲窮千里目，更上一層樓。」",
    correctAnswer: ['白', '日', '依', '山', '盡'],
    charList: [
        '白', '日', '依', '山', '盡', '黃', '河', '入', '海', '流',
        '欲', '窮', '千', '裡', '目', '更', '上', '一', '層', '樓',
        '春', '眠', '不', '覺', '曉', '處', '處', '聞', '啼', '鳥'
    ]
 },
 {
    question: "王之渙《登鸛雀樓》「白日依山盡，_____。欲窮千里目，更上一層樓。」",
    correctAnswer: ['黃', '河', '入', '海', '流'],
    charList: [
        '黃', '河', '入', '海', '流', '白', '日', '依', '山', '盡',
        '欲', '窮', '千', '裡', '目', '更', '上', '一', '層', '樓',
        '春', '眠', '不', '覺', '曉', '處', '處', '聞', '啼', '鳥'
    ]
 },
 {
    question: "王之渙《登鸛雀樓》「白日依山盡，黃河入海流。欲窮千里目，_____。」",
    correctAnswer: ['更', '上', '一', '層', '樓'],
    charList: [
        '更', '上', '一', '層', '樓', '白', '日', '依', '山', '盡',
        '黃', '河', '入', '海', '流', '欲', '窮', '千', '裡', '目',
        '春', '眠', '不', '覺', '曉', '處', '處', '聞', '啼', '鳥'
    ]
 }
];

// 2. 全局变量
let currentQuestionIndex = 0; // 当前题目索引（从0开始）
let userAnswer = []; // 当前题目的用户答案
let shuffledCharList = []; // 存储当前题目的随机打乱后的单字列表

// 3. 获取DOM元素
const progressEl = document.getElementById('progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const questionEl = document.getElementById('question');
const answerPreview = document.getElementById('answerPreview');
const charBank = document.getElementById('charBank');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');

// 4. 洗牌函数 - 随机打乱数组顺序（Fisher-Yates 洗牌算法）
function shuffleArray(array) {
    // 创建数组副本，避免修改原数组
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        // 生成0到i之间的随机索引
        const j = Math.floor(Math.random() * (i + 1));
        // 交换位置
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 5. init Question
function initCurrentQuestion() {
    const currentQuiz = quizConfig[currentQuestionIndex];
    
    questionEl.textContent = currentQuiz.question;
    progressEl.textContent = `第 ${currentQuestionIndex + 1} 題 / 共 10 題`;
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === quizConfig.length - 1;
    
    resetQuiz();
    
    // shuffle string list
    shuffledCharList = shuffleArray(currentQuiz.charList);
    generateCharButtons(shuffledCharList);
}

// 6. generate char buttons
function generateCharButtons(charList) {
    charBank.innerHTML = ''; 
    charList.forEach((char, index) => {
        const btn = document.createElement('button');
        btn.className = 'char-btn';
        btn.textContent = char;
        btn.dataset.index = index; 
        btn.dataset.originalChar = char; 
        btn.addEventListener('click', () => selectChar(btn, char));
        charBank.appendChild(btn);
    });
}

// 7. select char 
function selectChar(btn, char) {
    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        userAnswer = userAnswer.filter(item => item.index == btn.dataset.index);
    } else {
        
        btn.classList.add('selected');
        userAnswer.push({ 
            char: char, 
            index: btn.dataset.index 
        });
    }
    
    updateAnswerPreview();
}

// 8. update answer preview
function updateAnswerPreview() {
    if (userAnswer.length === 0) {
        answerPreview.innerHTML = '請點擊下方單字組成答案';
        return;
    }

    answerPreview.innerHTML = '';
    userAnswer.forEach((item, idx) => {
        const charEl = document.createElement('div');
        charEl.className = 'answer-char';
        charEl.innerHTML = `${item.char} <span class="remove">×</span>`;
        charEl.querySelector('.remove').addEventListener('click', () => {
            const btn = document.querySelector(`.char-btn[data-index="${item.index}"]`);
            btn.classList.remove('selected');
            userAnswer.splice(idx, 1);
            updateAnswerPreview();
        });
        answerPreview.appendChild(charEl);
    });
}

// 9. Check result 
function checkAnswer() {
    result.className = 'result';
    const currentQuiz = quizConfig[currentQuestionIndex];
    const userAnswerText = userAnswer.map(item => item.char);
    const correctAnswerText = currentQuiz.correctAnswer;

    if (userAnswerText.length !== correctAnswerText.length) {
        result.className = 'result wrong';
        result.textContent = `答案錯誤！正確答案需要${correctAnswerText.length}個字。 `;
        return; 
    }

    if (JSON.stringify(userAnswerText) === JSON.stringify(correctAnswerText)) {
        result.className = 'result correct';
        result.textContent = '恭喜！答案正確！ ';
    } else {
        const sortedUser = [...userAnswerText].sort().join('');
        const sortedCorrect = [...correctAnswerText].sort().join('');

        if (sortedUser === sortedCorrect) {
        result.className = 'result wrong';
        result.textContent = `答案錯誤！你輸入的字元是對的，但順序不對。`;
        } else {
        result.className = 'result wrong';
        result.textContent = `答案錯誤！`;
        }
    }
}

// 10. reset quiz
function resetQuiz() {
    userAnswer = [];
    document.querySelectorAll('.char-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    updateAnswerPreview();
    result.className = 'result';
}

// 11. Check another question
function changeQuestion(direction) {
    // direction: -1 上一题，1 下一题
    currentQuestionIndex += direction;
    initCurrentQuestion();
}

// 12. Event listeners
// submit answer
submitBtn.addEventListener('click', checkAnswer);
// reset answer
resetBtn.addEventListener('click', resetQuiz);
// prev question
prevBtn.addEventListener('click', () => changeQuestion(-1));
// next question
nextBtn.addEventListener('click', () => changeQuestion(1));

// 13. Get the first question
initCurrentQuestion();