const defaultDecks = [
  {
    id: 'java', name: 'Core Concepts', subject: 'Java', icon: 'J', color: '#d09169', cards: [
      { front: 'What is the difference between the JDK, JRE, and JVM?', back: 'The JVM runs Java bytecode; the JRE bundles the JVM and runtime libraries; the JDK adds development tools such as the compiler.', category: 'JAVA BASICS' },
      { front: 'What is a class, and what is an object?', back: 'A class defines a type and its behavior. An object is a particular instance of that class with its own state.', category: 'OBJECT-ORIENTED JAVA' },
      { front: 'What does encapsulation mean in Java?', back: 'Keeping data and the methods that operate on it together, while controlling access with modifiers such as private and public.', category: 'OBJECT-ORIENTED JAVA' },
      { front: 'What is inheritance in Java?', back: 'A class can extend another class and reuse or specialize its accessible behavior. Java classes have single inheritance.', category: 'OBJECT-ORIENTED JAVA' },
      { front: 'What is polymorphism?', back: 'The same supertype reference can represent different concrete objects, whose overridden methods provide type-specific behavior.', category: 'OBJECT-ORIENTED JAVA' },
      { front: 'When would you use an interface?', back: 'Use an interface to define a contract that unrelated classes can implement. A class can implement multiple interfaces.', category: 'TYPES & DESIGN' },
      { front: 'Why are Java strings immutable?', back: 'A String cannot change after creation. Immutability supports safe sharing, stable hash codes, and predictable behavior.', category: 'JAVA BASICS' },
      { front: 'What is the difference between == and equals() for objects?', back: '== compares object references; equals() compares logical equality when the class provides an appropriate implementation.', category: 'JAVA BASICS' },
      { front: 'What is the difference between a checked and an unchecked exception?', back: 'Checked exceptions must be caught or declared. Unchecked exceptions are RuntimeException types and have no such compiler requirement.', category: 'EXCEPTIONS' },
      { front: 'What does static mean for a Java field or method?', back: 'It belongs to the class rather than an individual instance, so it can be accessed through the class name.', category: 'JAVA BASICS' }
    ]
  },
  {
    id: 'operating-systems', name: 'Core Concepts', subject: 'Operating System', icon: '◫', color: '#83a66d', cards: [
      { front: 'What is the role of an operating system?', back: 'It manages hardware and system resources, and provides services and abstractions that applications use.', category: 'OS BASICS' },
      { front: 'How is a process different from a program?', back: 'A program is a passive set of instructions; a process is a running instance with its own execution state and resources.', category: 'PROCESSES' },
      { front: 'What is a thread?', back: 'A unit of execution within a process. Threads in the same process share its address space and resources.', category: 'PROCESSES' },
      { front: 'What happens during a context switch?', back: 'The OS saves the state of one running task and restores another task’s state so the CPU can switch execution.', category: 'CPU SCHEDULING' },
      { front: 'What four conditions are required for deadlock?', back: 'Mutual exclusion, hold and wait, no preemption, and circular wait must all hold for deadlock to occur.', category: 'SYNCHRONIZATION' },
      { front: 'What is virtual memory?', back: 'A memory-management technique that gives each process a virtual address space, mapped to physical memory and, when needed, secondary storage.', category: 'MEMORY' },
      { front: 'What is a page fault?', back: 'An exception raised when a process accesses a virtual-memory page that is not currently mapped in physical memory.', category: 'MEMORY' },
      { front: 'What is a semaphore used for?', back: 'A synchronization primitive that coordinates access to shared resources using operations that wait for or signal availability.', category: 'SYNCHRONIZATION' },
      { front: 'How does round-robin CPU scheduling work?', back: 'Each ready process receives a fixed time quantum in turn. A process that is not finished is moved to the back of the ready queue.', category: 'CPU SCHEDULING' },
      { front: 'Why does an OS use user mode and kernel mode?', back: 'The privilege separation restricts applications from executing sensitive operations directly, reserving them for the kernel.', category: 'OS BASICS' }
    ]
  },
  {
    id: '8085', name: 'Fundamentals', subject: '8085 Microprocessor', icon: 'µ', color: '#8392ad', cards: [
      { front: 'How many bits does the 8085 microprocessor process at a time?', back: 'It is an 8-bit microprocessor: its ALU and accumulator operate on 8-bit data.', category: 'ARCHITECTURE' },
      { front: 'How wide is the 8085 address bus, and how much memory can it address?', back: 'Its 16-bit address bus can address 2¹⁶, or 65,536 bytes (64 KB), of memory.', category: 'ARCHITECTURE' },
      { front: 'What is the role of the 8085 accumulator?', back: 'The 8-bit accumulator stores an operand and commonly holds the result of ALU operations.', category: 'REGISTERS' },
      { front: 'Which register pairs can be formed from B, C, D, E, H, and L?', back: 'BC, DE, and HL. The HL pair is also commonly used as a memory pointer.', category: 'REGISTERS' },
      { front: 'What do the program counter and stack pointer store?', back: 'Both are 16-bit registers. The program counter holds the next instruction address; the stack pointer holds the top-of-stack address.', category: 'REGISTERS' },
      { front: 'Why are AD0–AD7 multiplexed on the 8085?', back: 'The same pins carry the low-order address during the first part of a machine cycle and data later, reducing pin count.', category: 'BUSES & TIMING' },
      { front: 'What is the purpose of the ALE signal?', back: 'The Address Latch Enable signal marks when AD0–AD7 carry the low-order address, so an external latch can hold it.', category: 'BUSES & TIMING' },
      { front: 'Which 8085 interrupt has the highest priority and cannot be disabled?', back: 'TRAP is the highest-priority, non-maskable interrupt.', category: 'INTERRUPTS' },
      { front: 'What information do the 8085 condition flags represent?', back: 'The sign, zero, auxiliary carry, parity, and carry status resulting from eligible arithmetic or logical operations.', category: 'FLAGS & ALU' },
      { front: 'What is the difference between a machine cycle and a T-state?', back: 'A machine cycle performs a bus-level operation, such as a memory read. It consists of one or more T-states, the processor clock periods.', category: 'BUSES & TIMING' }
    ]
  },
  {
    id: 'web-technologies', name: 'Web Foundations', subject: 'Web Technologies', icon: '⌘', color: '#bd805e', cards: [
      { front: 'What is HTML used for?', back: 'HTML describes the structure and meaning of web-page content using elements such as headings, links, and forms.', category: 'WEB BASICS' },
      { front: 'What is CSS used for?', back: 'CSS controls how web content is presented, including layout, color, typography, and responsive styles.', category: 'WEB BASICS' },
      { front: 'What does JavaScript add to a web page?', back: 'It enables programmable behavior in the browser, such as responding to user input and updating page content.', category: 'WEB BASICS' },
      { front: 'What is the DOM?', back: 'The Document Object Model is the browser’s structured, programmable representation of an HTML document.', category: 'BROWSER' },
      { front: 'What is the basic client-server request cycle?', back: 'A client sends a request to a server; the server processes it and returns a response, often containing data or a web resource.', category: 'NETWORKING' },
      { front: 'What does HTTP define?', back: 'HTTP defines a stateless request-response protocol used to transfer resources between clients and servers.', category: 'NETWORKING' },
      { front: 'What is a REST API?', back: 'An API style that models resources and uses a stateless HTTP interface, commonly with methods such as GET, POST, PUT, and DELETE.', category: 'APIS' },
      { front: 'How does localStorage differ from a cookie?', back: 'localStorage stores browser-side key-value data without automatically attaching it to requests. Cookies can be sent with matching HTTP requests.', category: 'BROWSER STORAGE' },
      { front: 'What does HTTPS provide?', back: 'HTTPS is HTTP protected by TLS, providing encryption in transit and server authentication, plus integrity protection.', category: 'SECURITY' },
      { front: 'How do CSS media queries support responsive design?', back: 'They apply styles conditionally based on features such as viewport width, letting layouts adapt to different screens.', category: 'RESPONSIVE DESIGN' }
    ]
  }
];

const storageKey = 'examvoice-study-v2';
const dailyGoal = 12;
let savedState = loadState();
let decks = savedState?.decks?.length ? savedState.decks : structuredClone(defaultDecks);
let selectedDeckId = decks[0].id;
let currentIndex = 0;
let flipped = false;
let quizActive = false;
let quizAnswered = false;
let quizComplete = false;
let quizScore = 0;
let quizStreak = 0;
let bestQuizStreak = 0;
let quizOptions = [];
let quizChoice = -1;
let sessionReviewed = 0;
let sessionKnown = 0;
let toastTimeout;
let darkMode = false;

const elements = {
  sidebarDecks: document.querySelector('#sidebar-decks'),
  deckList: document.querySelector('#deck-list'),
  subjectSelector: document.querySelector('#subject-selector'),
  activeDeckDot: document.querySelector('#active-deck-dot'),
  card: document.querySelector('#flashcard'),
  category: document.querySelector('#card-category'),
  audioIndicator: document.querySelector('#audio-indicator'),
  sideLabel: document.querySelector('#card-side-label'),
  question: document.querySelector('#card-question'),
  hint: document.querySelector('#card-hint'),
  origin: document.querySelector('#card-origin'),
  cardNumber: document.querySelector('#card-number'),
  position: document.querySelector('#card-position'),
  deckSearch: document.querySelector('#deck-search'),
  quizModeButton: document.querySelector('#quiz-mode-button'),
  quizModeLabel: document.querySelector('#quiz-mode-label'),
  studyModeRow: document.querySelector('#study-mode-row'),
  quizControls: document.querySelector('#quiz-controls'),
  quizStep: document.querySelector('#quiz-step'),
  quizScore: document.querySelector('#quiz-score'),
  quizProgressFill: document.querySelector('#quiz-progress-fill'),
  quizStreak: document.querySelector('#quiz-streak'),
  quizOptions: document.querySelector('#quiz-options'),
  quizFeedback: document.querySelector('#quiz-feedback'),
  quizContinueButton: document.querySelector('#quiz-continue-button'),
  quizResult: document.querySelector('#quiz-result'),
  quizResultScore: document.querySelector('#quiz-result-score'),
  quizResultCopy: document.querySelector('#quiz-result-copy'),
  dialog: document.querySelector('#add-dialog'),
  form: document.querySelector('#add-card-form'),
  toast: document.querySelector('#toast')
};

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey));
  } catch {
    return null;
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ decks }));
  } catch {
    showToast('Your browser could not save this change.');
  }
}

function getSelectedDeck() {
  return decks.find((deck) => deck.id === selectedDeckId) ?? decks[0];
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderDecks() {
  const search = elements.deckSearch.value.trim().toLowerCase();
  const visibleDecks = decks.filter((deck) => `${deck.subject} ${deck.name}`.toLowerCase().includes(search));
  elements.deckList.innerHTML = visibleDecks.length ? visibleDecks.map((deck) => {
    const knownCount = deck.cards.filter((card) => card.known).length;
    const percent = deck.cards.length ? Math.round((knownCount / deck.cards.length) * 100) : 0;
    return `<button class="deck-item${deck.id === selectedDeckId ? ' active' : ''}" type="button" data-deck-id="${escapeHtml(deck.id)}" aria-pressed="${deck.id === selectedDeckId}">
      <span class="deck-item-top"><span class="deck-emoji" aria-hidden="true">${escapeHtml(deck.icon)}</span><span class="deck-item-copy"><strong>${escapeHtml(deck.subject)} · ${escapeHtml(deck.name)}</strong><span>${deck.cards.length} cards</span></span><span class="deck-color-dot" style="background:${escapeHtml(deck.color)}"></span></span>
      <span class="deck-progress-row"><span class="deck-progress-track"><span style="width:${percent}%"></span></span><span>${percent}%</span></span>
    </button>`;
  }).join('') : '<div class="no-results">No decks found.</div>';

  elements.sidebarDecks.innerHTML = decks.map((deck) => `<button class="sidebar-deck${deck.id === selectedDeckId ? ' selected' : ''}" type="button" data-deck-id="${escapeHtml(deck.id)}" aria-pressed="${deck.id === selectedDeckId}"><span class="deck-color-dot" style="background:${escapeHtml(deck.color)}"></span><span class="sidebar-deck-name">${escapeHtml(deck.subject)} · ${escapeHtml(deck.name)}</span><span class="sidebar-deck-count">${deck.cards.length}</span></button>`).join('');
  document.querySelector('#deck-total').textContent = String(decks.length).padStart(2, '0');
  document.querySelector('#nav-deck-count').textContent = decks.length;
}

function renderCard() {
  const deck = getSelectedDeck();
  if (!deck.cards.length) return;
  currentIndex = (currentIndex + deck.cards.length) % deck.cards.length;
  const card = deck.cards[currentIndex];
  elements.subjectSelector.innerHTML = decks.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.subject)}</option>`).join('');
  elements.subjectSelector.value = deck.id;
  elements.activeDeckDot.style.background = deck.color;
  elements.category.textContent = card.category || deck.subject.toUpperCase();
  elements.sideLabel.textContent = flipped ? 'ANSWER' : 'TERM';
  elements.question.textContent = flipped ? card.back : card.front;
  elements.hint.innerHTML = flipped ? '<span aria-hidden="true">↵</span> Click to see question' : '<span aria-hidden="true">↵</span> Click to reveal answer';
  elements.origin.textContent = `${deck.subject} · ${deck.name}`.toUpperCase();
  elements.cardNumber.textContent = String(currentIndex + 1).padStart(2, '0');
  elements.position.innerHTML = `${String(currentIndex + 1).padStart(2, '0')} <span>/</span> ${String(deck.cards.length).padStart(2, '0')}`;
  elements.card.classList.toggle('flipped', flipped);
  elements.card.classList.toggle('quiz-question-only', quizActive);
  elements.card.setAttribute('aria-pressed', String(flipped));
  elements.card.setAttribute('aria-label', quizActive ? `Quiz question: ${card.front}` : `${flipped ? 'Answer' : 'Question'}: ${flipped ? card.back : card.front}. Click to ${flipped ? 'see question' : 'reveal answer'}`);
  renderQuizState();
  renderDecks();
}

function renderQuizState() {
  const deck = getSelectedDeck();
  const quizInProgress = quizActive && !quizComplete;
  elements.studyModeRow.hidden = quizComplete;
  elements.quizModeButton.setAttribute('aria-pressed', String(quizActive));
  elements.quizModeLabel.textContent = quizActive ? 'Exit quiz' : 'Start quiz';
  elements.card.hidden = quizComplete;
  document.querySelector('.card-controls').hidden = quizActive;
  document.querySelector('.keyboard-hint').hidden = quizActive;
  elements.quizControls.hidden = !quizInProgress;
  elements.quizResult.hidden = !quizComplete;

  if (quizInProgress) {
    const card = deck.cards[currentIndex];
    const correctAnswer = card.back;
    const percent = Math.round(((currentIndex + (quizAnswered ? 1 : 0)) / deck.cards.length) * 100);
    elements.quizStep.textContent = `QUESTION ${currentIndex + 1} / ${deck.cards.length}`;
    elements.quizScore.textContent = `${quizScore} correct`;
    elements.quizStreak.textContent = `${quizStreak} correct in a row`;
    elements.quizProgressFill.style.width = `${percent}%`;
    elements.quizOptions.innerHTML = quizOptions.map((option, index) => {
      const isCorrect = option === correctAnswer;
      const isSelected = index === quizChoice;
      const classes = ['quiz-option'];
      if (quizAnswered && isCorrect) classes.push('is-correct');
      if (quizAnswered && isSelected && !isCorrect) classes.push('is-incorrect');
      if (isSelected) classes.push('is-selected');
      return `<button class="${classes.join(' ')}" type="button" data-option-index="${index}" aria-pressed="${isSelected}"${quizAnswered ? ' disabled' : ''}><span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-text">${escapeHtml(option)}</span><span class="option-mark" aria-hidden="true"></span></button>`;
    }).join('');
    elements.quizFeedback.hidden = !quizAnswered;
    elements.quizFeedback.classList.toggle('is-correct', quizOptions[quizChoice] === correctAnswer);
    elements.quizFeedback.classList.toggle('is-incorrect', quizOptions[quizChoice] !== correctAnswer);
    elements.quizFeedback.textContent = quizOptions[quizChoice] === correctAnswer ? 'Correct. Nice recall.' : `Not quite. The answer is: ${correctAnswer}`;
    elements.quizContinueButton.hidden = !quizAnswered;
    elements.quizContinueButton.innerHTML = currentIndex + 1 === deck.cards.length ? 'See results <span aria-hidden="true">→</span>' : 'Continue <span aria-hidden="true">→</span>';
  }

  if (quizComplete) {
    elements.quizResultScore.textContent = `${quizScore} / ${deck.cards.length}`;
    elements.quizResultCopy.textContent = `You got ${quizScore} out of ${deck.cards.length} correct.`;
    document.querySelector('#quiz-result-streak').textContent = `Best streak: ${bestQuizStreak}`;
    document.querySelector('#quiz-result-title').textContent = quizScore === deck.cards.length ? 'Perfect score.' : 'Quiz complete.';
    const colors = ['#8be0c1', '#a6b6ff', '#ffc680', '#ff8d9a', '#b6e581'];
    document.querySelector('#confetti-layer').innerHTML = Array.from({ length: 42 }, (_, index) => `<i style="--confetti-x:${Math.random() * 100}%;--confetti-delay:${Math.random() * 1.8}s;--confetti-color:${colors[index % colors.length]};--confetti-rotation:${Math.floor(Math.random() * 360)}deg"></i>`).join('');
  }
}

function buildQuizOptions() {
  const deck = getSelectedDeck();
  const correctAnswer = deck.cards[currentIndex].back;
  const alternatives = [...new Set(deck.cards.filter((_, index) => index !== currentIndex).map((card) => card.back).filter((answer) => answer !== correctAnswer))].slice(0, 3);
  while (alternatives.length < 3) alternatives.push(`Review this ${deck.subject} concept again (${alternatives.length + 1})`);
  quizOptions = [correctAnswer, ...alternatives];
  for (let index = quizOptions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [quizOptions[index], quizOptions[swapIndex]] = [quizOptions[swapIndex], quizOptions[index]];
  }
  quizChoice = -1;
}

function renderProgress() {
  const percent = Math.min(100, Math.round((sessionReviewed / dailyGoal) * 100));
  document.querySelector('#daily-progress-number').textContent = `${percent}%`;
  document.querySelector('#daily-progress-copy').textContent = `${sessionReviewed} of ${dailyGoal} cards`;
  document.querySelector('#progress-ring').style.setProperty('--progress', `${percent * 3.6}deg`);
  document.querySelector('#session-reviewed').textContent = sessionReviewed;
  document.querySelector('#session-known').textContent = sessionKnown;
  document.querySelector('#session-track-fill').style.width = `${sessionReviewed ? Math.round((sessionKnown / sessionReviewed) * 100) : 0}%`;
}

function setCard(index) {
  currentIndex = index;
  flipped = false;
  renderCard();
}

function flipCard() {
  if (quizActive) return;
  flipped = !flipped;
  renderCard();
}

function startQuiz() {
  quizActive = true;
  quizAnswered = false;
  quizComplete = false;
  quizScore = 0;
  quizStreak = 0;
  bestQuizStreak = 0;
  currentIndex = 0;
  flipped = false;
  buildQuizOptions();
  renderCard();
}

function exitQuiz() {
  quizActive = false;
  quizAnswered = false;
  quizComplete = false;
  currentIndex = 0;
  flipped = false;
  renderCard();
}

function chooseQuizAnswer(choiceIndex) {
  if (!quizActive || quizAnswered || choiceIndex < 0 || choiceIndex >= quizOptions.length) return;
  quizChoice = choiceIndex;
  quizAnswered = true;
  const correct = quizOptions[choiceIndex] === getSelectedDeck().cards[currentIndex].back;
  if (correct) {
    quizScore += 1;
    quizStreak += 1;
    bestQuizStreak = Math.max(bestQuizStreak, quizStreak);
  } else {
    quizStreak = 0;
  }
  renderCard();
}

function advanceQuiz() {
  if (!quizActive || !quizAnswered) return;
  const deck = getSelectedDeck();
  if (currentIndex + 1 >= deck.cards.length) {
    quizComplete = true;
  } else {
    currentIndex += 1;
    quizAnswered = false;
    flipped = false;
    buildQuizOptions();
  }
  renderCard();
}

function setDarkMode(enabled) {
  darkMode = enabled;
  document.body.classList.toggle('dark-mode', darkMode);
  document.querySelector('#sidebar-theme-toggle').setAttribute('aria-checked', String(darkMode));
  const mobileToggle = document.querySelector('#mobile-theme-toggle');
  mobileToggle.setAttribute('aria-label', darkMode ? 'Enable light mode' : 'Enable dark mode');
  mobileToggle.title = darkMode ? 'Switch to light mode' : 'Switch to dark mode';
  mobileToggle.textContent = darkMode ? '☼' : '◐';
  try {
    localStorage.setItem('examvoice-theme-v2', darkMode ? 'dark' : 'light');
  } catch {
    showToast('Your browser could not save this preference.');
  }
}

function toggleDarkMode() {
  setDarkMode(!darkMode);
}

function rateCard(remembered) {
  if (!flipped) {
    flipCard();
    return;
  }
  const deck = getSelectedDeck();
  const card = deck.cards[currentIndex];
  if (remembered) card.known = true;
  sessionReviewed += 1;
  if (remembered) sessionKnown += 1;
  renderProgress();
  setCard((currentIndex + 1) % deck.cards.length);
  if (remembered) saveState();
}

function speakCard() {
  const card = getSelectedDeck().cards[currentIndex];
  const text = flipped ? card.back : card.front;
  if (!('speechSynthesis' in window)) {
    showToast('Speech playback is not available in this browser.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function openDialog() {
  const select = document.querySelector('#new-card-deck');
  select.innerHTML = decks.map((deck) => `<option value="${escapeHtml(deck.id)}">${escapeHtml(deck.subject)} · ${escapeHtml(deck.name)}</option>`).join('');
  select.value = selectedDeckId;
  elements.dialog.showModal();
  document.querySelector('#new-card-front').focus();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => elements.toast.classList.remove('visible'), 2200);
}

function selectDeck(deckId) {
  if (!decks.some((deck) => deck.id === deckId)) return;
  quizActive = false;
  quizAnswered = false;
  quizComplete = false;
  selectedDeckId = deckId;
  currentIndex = 0;
  flipped = false;
  renderCard();
}

document.querySelector('#today-date').textContent = new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date()).toUpperCase();
try {
  setDarkMode(localStorage.getItem('examvoice-theme-v2') !== 'light');
} catch {
  setDarkMode(true);
}
document.querySelector('#flashcard').addEventListener('click', flipCard);
elements.quizModeButton.addEventListener('click', () => quizActive ? exitQuiz() : startQuiz());
elements.quizOptions.addEventListener('click', (event) => {
  const option = event.target.closest('[data-option-index]');
  if (option) chooseQuizAnswer(Number(option.dataset.optionIndex));
});
elements.quizContinueButton.addEventListener('click', advanceQuiz);
document.querySelector('#quiz-restart-button').addEventListener('click', startQuiz);
document.querySelector('#quiz-exit-button').addEventListener('click', exitQuiz);
document.querySelector('#sidebar-theme-toggle').addEventListener('click', toggleDarkMode);
document.querySelector('#mobile-theme-toggle').addEventListener('click', toggleDarkMode);
document.querySelector('#speak-button').addEventListener('click', speakCard);
document.querySelector('#again-button').addEventListener('click', () => rateCard(false));
document.querySelector('#know-button').addEventListener('click', () => rateCard(true));
document.querySelector('#next-button').addEventListener('click', () => setCard(currentIndex + 1));
document.querySelector('#previous-button').addEventListener('click', () => setCard(currentIndex - 1));
document.querySelector('#shuffle-button').addEventListener('click', () => {
  const deck = getSelectedDeck();
  if (deck.cards.length > 1) {
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) nextIndex = Math.floor(Math.random() * deck.cards.length);
    setCard(nextIndex);
  }
});
document.querySelector('#deck-search').addEventListener('input', renderDecks);
document.querySelector('#deck-list').addEventListener('click', (event) => {
  const button = event.target.closest('[data-deck-id]');
  if (button) selectDeck(button.dataset.deckId);
});
document.querySelector('#sidebar-decks').addEventListener('click', (event) => {
  const button = event.target.closest('[data-deck-id]');
  if (button) selectDeck(button.dataset.deckId);
});
elements.subjectSelector.addEventListener('change', () => selectDeck(elements.subjectSelector.value));
document.querySelector('#add-card-button').addEventListener('click', openDialog);
document.querySelector('#top-add').addEventListener('click', openDialog);
document.querySelector('#sidebar-add').addEventListener('click', openDialog);
document.querySelector('#close-dialog').addEventListener('click', () => elements.dialog.close());
elements.dialog.addEventListener('click', (event) => {
  if (event.target === elements.dialog) elements.dialog.close();
});
elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(elements.form);
  const deck = decks.find((item) => item.id === formData.get('deck'));
  if (!deck) return;
  deck.cards.push({ front: String(formData.get('front')).trim(), back: String(formData.get('back')).trim(), category: deck.subject.toUpperCase() });
  selectedDeckId = deck.id;
  currentIndex = deck.cards.length - 1;
  flipped = false;
  saveState();
  elements.form.reset();
  elements.dialog.close();
  renderCard();
  showToast('Flashcard added to your deck.');
});
document.addEventListener('keydown', (event) => {
  if (elements.dialog.open) return;
  if (quizActive) {
    if (event.key === 'Escape') exitQuiz();
    return;
  }
  const editing = event.target.matches('input, textarea, select');
  if (event.key === '/' && !editing) {
    event.preventDefault();
    elements.deckSearch.focus();
  } else if (editing) {
    return;
  } else if (event.code === 'Space') {
    event.preventDefault();
    flipCard();
  } else if (event.key === 'ArrowRight') {
    setCard(currentIndex + 1);
  } else if (event.key === 'ArrowLeft') {
    setCard(currentIndex - 1);
  } else if (event.key === '1') {
    rateCard(false);
  } else if (event.key === '2') {
    rateCard(true);
  }
});

renderCard();
renderProgress();