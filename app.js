let currentIndex = 0;
let mode = 'sequential';
let filteredQuestions = [...questions];
let selectedAnswer = null;
let answered = false;
let correctCount = 0;
let wrongCount = 0;
let wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions') || '[]');
let selectedChapters = new Set();

function initChapterFilter() {
    const chapters = [...new Set(questions.map(q => q.chapter))];
    const container = document.getElementById('chapterFilter');
    container.innerHTML = '<strong>章节筛选：</strong>' + chapters.map(ch => 
        `<label><input type="checkbox" value="${ch}" checked onchange="filterByChapter()"> ${ch}</label>`
    ).join('');
    chapters.forEach(ch => selectedChapters.add(ch));
}

function filterByChapter() {
    selectedChapters.clear();
    document.querySelectorAll('#chapterFilter input:checked').forEach(cb => selectedChapters.add(cb.value));
    applyFilters();
}

function applyFilters() {
    if (mode === 'wrong') {
        filteredQuestions = questions.filter(q => wrongQuestions.includes(q.id) && selectedChapters.has(q.chapter));
    } else {
        filteredQuestions = questions.filter(q => selectedChapters.has(q.chapter));
    }
    if (mode === 'random') shuffleArray(filteredQuestions);
    currentIndex = 0;
    updateStats();
    renderQuestion();
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function setMode(m) {
    mode = m;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    correctCount = 0; wrongCount = 0;
    applyFilters();
}

function renderQuestion() {
    if (filteredQuestions.length === 0) {
        document.getElementById('questionText').textContent = '没有符合条件的题目';
        document.getElementById('options').innerHTML = '';
        document.getElementById('chapter').textContent = '';
        return;
    }
    const q = filteredQuestions[currentIndex];
    document.getElementById('chapter').textContent = q.chapter;
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('options').innerHTML = q.options.map((opt, i) => 
        `<div class="option" onclick="selectOption(${i})">
            <div class="option-label">${String.fromCharCode(65 + i)}</div>
            <div>${opt}</div>
        </div>`
    ).join('');
    document.getElementById('result').style.display = 'none';
    selectedAnswer = null;
    answered = false;
    document.getElementById('submitBtn').textContent = '提交答案';
    updateStats();
}

function selectOption(index) {
    if (answered) return;
    selectedAnswer = index;
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

function submitAnswer() {
    if (selectedAnswer === null || answered) return;
    answered = true;
    const q = filteredQuestions[currentIndex];
    const correct = selectedAnswer === q.answer;
    const options = document.querySelectorAll('.option');
    options[q.answer].classList.add('correct');
    if (!correct) {
        options[selectedAnswer].classList.add('wrong');
        wrongCount++;
        if (!wrongQuestions.includes(q.id)) {
            wrongQuestions.push(q.id);
            localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
        }
    } else {
        correctCount++;
        wrongQuestions = wrongQuestions.filter(id => id !== q.id);
        localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    }
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.className = 'result ' + (correct ? 'correct' : 'wrong');
    result.textContent = correct ? '✓ 回答正确！' : `✗ 回答错误！正确答案是 ${String.fromCharCode(65 + q.answer)}`;
    document.getElementById('submitBtn').textContent = '已提交';
    updateStats();
}

function prevQuestion() {
    if (currentIndex > 0) { currentIndex--; renderQuestion(); }
}

function nextQuestion() {
    if (currentIndex < filteredQuestions.length - 1) { currentIndex++; renderQuestion(); }
}

function updateStats() {
    document.getElementById('current').textContent = filteredQuestions.length ? currentIndex + 1 : 0;
    document.getElementById('total').textContent = filteredQuestions.length;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    const total = correctCount + wrongCount;
    document.getElementById('accuracy').textContent = total ? Math.round(correctCount / total * 100) + '%' : '0%';
    document.getElementById('progress').style.width = filteredQuestions.length ? ((currentIndex + 1) / filteredQuestions.length * 100) + '%' : '0%';
}

function searchQuestions() {
    const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    if (!keyword) {
        resultsDiv.style.display = 'none';
        return;
    }
    const matches = questions.filter(q => 
        q.question.toLowerCase().includes(keyword) || 
        q.options.some(opt => opt.toLowerCase().includes(keyword))
    );
    if (matches.length === 0) {
        resultsDiv.innerHTML = '<div class="search-item"><div class="q-text">未找到相关题目</div></div>';
    } else {
        resultsDiv.innerHTML = matches.slice(0, 20).map(q => `
            <div class="search-item" onclick="jumpToQuestion(${q.id})">
                <div class="q-chapter">${q.chapter} - 第${q.id}题</div>
                <div class="q-text">${q.question}</div>
                <div class="q-answer">答案: ${String.fromCharCode(65 + q.answer)} - ${q.options[q.answer]}</div>
            </div>
        `).join('');
    }
    resultsDiv.style.display = 'block';
}

function jumpToQuestion(id) {
    const idx = filteredQuestions.findIndex(q => q.id === id);
    if (idx !== -1) {
        currentIndex = idx;
        renderQuestion();
    }
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        document.getElementById('searchResults').style.display = 'none';
    }
});

initChapterFilter();
renderQuestion();
