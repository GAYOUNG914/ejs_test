const express = require('express');
const app = express();

// EJS를 사용하기 위한 설정
app.set('view engine', 'ejs');

// EJS 파일이 위치한 디렉토리 설정 (옵션)
app.set('views', '../views');

// 기타 Express 설정과 미들웨어 등을 추가합니다.

app.use(express.static('public'));


let users = [
  {
    name:'firstMan',
    email:"firstEmail"
  },
  {
    name:'secondMan',
    email:"secondEmail"
  }
]

// 라우트 설정
app.get('/', (req, res) => {
  // index.ejs 파일을 렌더링하여 응답합니다.
  res.render('index', { users });
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});