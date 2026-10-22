// Original, age-appropriate practice material; not textbook excerpts.
const subjects={ko:{name:'국어',icon:'📖',desc:'읽고, 생각하고, 표현해요',color:'#f1e6df'},en:{name:'영어',icon:'🔤',desc:'처음 만나는 즐거운 영어',color:'#e7eaf5'},math:{name:'수학',icon:'🔢',desc:'생활 속 수학을 발견해요',color:'#e8efde'}};
let subject='ko',unit='';
const units={
 vocabulary:{subject:'ko',name:'낱말과 반대말',icon:'🌼',desc:'문장 속 낱말의 뜻 알기',lesson:'문장 속 낱말을 살펴보면 뜻을 짐작할 수 있어요. ‘높다’와 ‘낮다’처럼 뜻이 서로 반대인 말도 있어요.',rows:[
 ['‘커다란 나무’에서 ‘커다란’과 뜻이 비슷한 말은?',['큰','작은','낮은','짧은'],0,'커다랗다는 크기가 아주 크다는 뜻이에요.'],
 ['‘길다’의 반대말은?',['높다','짧다','많다','빠르다'],1,'연필이 길다 ↔ 연필이 짧다처럼 비교해요.'],
 ['‘친구에게 살며시 다가갔다.’에서 ‘살며시’의 뜻은?',['큰 소리로','아주 빠르게','조용하고 가볍게','화를 내며'],2,'살며시는 다른 사람이 잘 모르게 조용하고 가볍게 하는 모습이에요.'],
 ['‘밝다’의 반대말은?',['어둡다','가볍다','맑다','넓다'],0,'불을 켜면 밝고, 불을 끄면 어두워져요.'],
 ['‘꽃이 활짝 피었다.’에서 꽃의 모습은?',['아직 피지 않았다','시들어 떨어졌다','조금만 벌어졌다','활짝 벌어져 피었다'],3,'활짝은 넓게 벌어진 모습을 나타내요.']]},
 sentence:{subject:'ko',name:'문장과 문장 부호',icon:'✏️',desc:'알맞은 표현으로 문장 완성하기',lesson:'문장은 생각을 전하는 말이에요. 묻는 문장 끝에는 물음표(?), 설명하는 문장 끝에는 마침표(.)를 써요.',rows:[
 ['‘너는 몇 살이니’ 끝에 알맞은 부호는?',['.','?',',','·'],1,'나이를 묻는 문장이므로 물음표를 써요.'],
 ['알맞은 문장을 골라 보세요.',['나는 책을 읽어요.','나는 책이 읽어요.','나는 책에 읽어요.','나는 책으로 읽어요.'],0,'무엇을 읽는지 나타낼 때 ‘책을’이라고 해요.'],
 ['‘나는 학교에 갑니다’ 끝에 알맞은 부호는?',['?',',','.','·'],2,'자신의 행동을 설명하므로 마침표를 써요.'],
 ['‘동생이 우유를 ___.’에 알맞은 말은?',['신어요','입어요','들어요','마셔요'],3,'우유 같은 음료는 마셔요.'],
 ['띄어쓰기가 알맞은 문장은?',['나는친구와 놀아요.','나는 친구와 놀아요.','나 는친구와놀아요.','나는 친구 와놀아요.'],1,'‘나는 / 친구와 / 놀아요.’로 띄어 써요.']]},
 reading:{subject:'ko',name:'짧은 글 읽기',icon:'📚',desc:'누가, 언제, 무엇을 했을까요?',lesson:'글을 읽으며 누가 무엇을 했는지 찾아보세요. 글에 나온 사실을 확인하고 인물의 마음도 생각해 보아요.',rows:[
 ['민지는 비 오는 날 친구에게 우산을 함께 쓰자고 했어요. 민지가 한 일은?',['친구와 우산을 함께 썼어요','우산을 집에 두었어요','혼자 뛰어갔어요','친구의 우산을 숨겼어요'],0,'민지가 친구에게 우산을 함께 쓰자고 했다는 문장을 살펴보세요.'],
 ['준호는 아침에 화분에 물을 주었어요. 언제 물을 주었나요?',['점심','저녁','아침','밤'],2,'글에 나온 시간은 ‘아침’이에요.'],
 ['소라는 도서관에서 빌린 책을 다 읽고 돌려주었어요. 어디에서 책을 빌렸나요?',['운동장','도서관','수영장','시장'],1,'책을 빌린 장소가 ‘도서관’이라고 나와 있어요.'],
 ['지우는 잃어버린 강아지를 찾았어요. 지우는 어떤 마음일까요?',['찾아서 기뻐요','잃어버려서 신나요','찾아서 속상해요','찾아서 화나요'],0,'소중한 강아지를 다시 찾았으니 기쁘고 안심이 될 거예요.'],
 ['먼저 씨앗을 심었어요. 다음으로 물을 주었어요. 며칠 뒤 싹이 났어요. 가장 먼저 한 일은?',['싹을 보았어요','꽃을 꺾었어요','물을 주었어요','씨앗을 심었어요'],3,'시간 순서를 알려 주는 ‘먼저’를 찾아보세요.']]},
 expression:{subject:'ko',name:'마음과 생각 전하기',icon:'💬',desc:'예쁜 말과 알맞은 인사 배우기',lesson:'내 마음을 구체적으로 말하면 상대가 잘 이해해요. 고마울 때는 감사 인사를, 잘못했을 때는 사과를 전해요.',rows:[
 ['친구가 지우개를 빌려주었어요. 알맞은 말은?',['왜 빌려줘?','빌려줘서 고마워.','다시는 말하지 마.','내가 먼저야.'],1,'도움을 받았을 때는 무엇이 고마운지 말해요.'],
 ['친구의 발을 실수로 밟았어요. 어떤 말이 좋을까요?',['아프지 않지?','네 잘못이야.','발을 밟아서 미안해. 괜찮아?','그냥 참아.'],2,'내가 한 일을 사과하고 친구의 상태를 물어봐요.'],
 ['선생님께 아침 인사를 해요. 알맞은 말은?',['안녕하세요.','잘 자.','안녕히 주무세요.','다녀왔어.'],0,'선생님께는 높임말로 ‘안녕하세요.’라고 인사해요.'],
 ['친구의 이야기를 들을 때 좋은 태도는?',['말을 계속 끊어요','다른 곳만 봐요','크게 웃으며 놀려요','끝까지 듣고 내 생각을 말해요'],3,'차례를 지키며 끝까지 듣는 태도가 좋아요.'],
 ['‘나는 봄이 좋아요.’에 까닭을 덧붙인 문장은?',['나는 봄이 봄이에요.','꽃을 볼 수 있어서 봄이 좋아요.','봄이 좋아요 좋아요.','봄에는 봄이 와요.'],1,'‘꽃을 볼 수 있어서’는 좋아하는 까닭을 알려 줘요.']]},
 alphabet:{subject:'en',name:'알파벳 친구들',icon:'🔠',desc:'대문자와 소문자 만나기',lesson:'영어 알파벳에는 대문자와 소문자가 있어요. A–a, B–b처럼 짝을 이루어요. 영어는 초등 2학년을 위한 입문 활동이에요.',rows:[
 ['대문자 A의 소문자는?',['a','b','c','d'],0,'A와 a는 같은 알파벳의 대문자와 소문자예요.'],
 ['소문자 b의 대문자는?',['D','P','B','R'],2,'B와 b는 한 쌍이에요.'],
 ['A, B, __, D. 빈칸에 들어갈 알파벳은?',['E','C','F','G'],1,'알파벳은 A, B, C, D 순서로 이어져요.'],
 ['대문자 M의 소문자는?',['n','w','u','m'],3,'M의 소문자는 m이에요.'],
 ['대문자와 소문자의 짝이 맞는 것은?',['H–h','R–b','T–f','E–c'],0,'H와 h가 같은 알파벳이에요.']]},
 words:{subject:'en',name:'동물과 생활 낱말',icon:'🐱',desc:'친숙한 영어 낱말 알아보기',lesson:'cat은 고양이, dog는 개, book은 책이에요. 낱말을 소리 내어 읽어 보세요. 듣기 버튼으로 영어 발음을 들어 볼 수도 있어요.',rows:[
 ['고양이를 영어로 고르면?',['dog','cat','bird','fish'],1,'고양이는 cat이에요.','cat'],
 ['dog는 어떤 동물일까요?',['새','물고기','개','고양이'],2,'dog는 개예요.','dog'],
 ['책을 영어로 고르면?',['book','milk','apple','ball'],0,'책은 book이에요.','book'],
 ['apple의 뜻은?',['바나나','포도','오렌지','사과'],3,'apple은 사과예요.','apple'],
 ['공을 영어로 고르면?',['pen','bag','ball','desk'],2,'공은 ball이에요.','ball']]},
 colors:{subject:'en',name:'색깔과 숫자',icon:'🎨',desc:'기본 색깔과 1부터 10까지',lesson:'red는 빨강, blue는 파랑, yellow는 노랑이에요. one, two, three처럼 수를 세는 말도 배워요.',rows:[
 ['red는 어떤 색일까요?',['빨강','파랑','초록','노랑'],0,'red는 빨강이에요.','red'],
 ['파랑을 영어로 고르면?',['red','green','blue','yellow'],2,'파랑은 blue예요.','blue'],
 ['three는 얼마일까요?',['1','3','5','7'],1,'one(1), two(2), three(3)예요.','three'],
 ['5를 영어로 고르면?',['four','six','ten','five'],3,'5는 five예요.','five'],
 ['노랑을 영어로 고르면?',['yellow','black','white','pink'],0,'노랑은 yellow예요.','yellow']]},
 greetings:{subject:'en',name:'인사와 짧은 표현',icon:'👋',desc:'일상에서 쓰는 영어 인사',lesson:'Hello!는 안녕!, Thank you.는 고마워요., Good morning.은 아침 인사예요. 상황을 떠올리며 읽어 보세요.',rows:[
 ['친구를 만났을 때 하는 영어 인사는?',['Good night.','Hello!','Goodbye.','Sorry.'],1,'Hello!는 만났을 때 하는 인사예요.','Hello'],
 ['Thank you.의 뜻은?',['고마워요.','잘 자요.','미안해요.','안녕히 가세요.'],0,'도움을 받으면 Thank you.라고 말해요.','Thank you'],
 ['아침에 하는 인사는?',['Good night.','Goodbye.','Good morning.','See you.'],2,'Good morning.은 아침에 하는 인사예요.','Good morning'],
 ['실수했을 때 사과하는 말은?',['Hello.','Thank you.','Good morning.','Sorry.'],3,'Sorry.는 미안하다는 뜻이에요.','Sorry'],
 ['Goodbye.는 언제 쓸까요?',['헤어질 때','배고플 때','도움을 받을 때','아침에 일어날 때만'],0,'Goodbye.는 헤어질 때 하는 인사예요.','Goodbye']]},
 add:{subject:'math',name:'덧셈',icon:'＋',desc:'받아올림도 차근차근',lesson:'일의 자리끼리, 십의 자리끼리 더해요. 일의 자리의 합이 10 이상이면 십의 자리로 1을 올려요.'},
 sub:{subject:'math',name:'뺄셈',icon:'−',desc:'남은 수를 알아봐요',lesson:'큰 수에서 얼마를 빼는지 생각해요. 일의 자리에서 뺄 수 없으면 십의 자리에서 10을 가져와요.'},
 mul:{subject:'math',name:'구구단',icon:'×',desc:'같은 수끼리 묶어 봐요',lesson:'3개씩 4묶음은 3 + 3 + 3 + 3 = 12예요. 곱셈으로 3 × 4 = 12라고 써요.'},
 clock:{subject:'math',name:'시계 읽기',icon:'◷',desc:'몇 시 몇 분일까요?',lesson:'짧은 바늘은 시, 긴 바늘은 분을 나타내요. 긴 바늘이 숫자 한 칸을 움직이면 5분이에요.'},
 numbers:{subject:'math',name:'세 자리·네 자리 수',icon:'🔢',desc:'자릿값과 수의 크기',lesson:'325는 100이 3개, 10이 2개, 1이 5개예요. 네 자리 수는 천의 자리부터 차례로 읽고 비교해요.',rows:[
 ['100이 3개, 10이 2개, 1이 5개인 수는?',['325','352','235','523'],0,'300 + 20 + 5 = 325예요.'],
 ['482에서 8이 나타내는 값은?',['8','800','80','8000'],2,'8은 십의 자리에 있으므로 80을 나타내요.'],
 ['다음 중 가장 큰 수는?',['298','302','289','299'],1,'백의 자리가 3인 302가 가장 커요.'],
 ['999보다 1 큰 수는?',['990','100','9999','1000'],3,'999 + 1 = 1000이에요.'],
 ['2300을 읽은 말은?',['이천삼백','이백삼십','삼천이백','이천삼십'],0,'천의 자리가 2, 백의 자리가 3이므로 이천삼백이에요.']]},
 shapes:{subject:'math',name:'도형과 규칙',icon:'🔺',desc:'모양을 살피고 규칙 찾기',lesson:'삼각형은 변과 꼭짓점이 각각 3개, 사각형은 각각 4개예요. 반복되는 모양이나 수의 변화를 살피면 규칙을 찾을 수 있어요.',rows:[
 ['삼각형의 꼭짓점은 몇 개일까요?',['2개','3개','4개','5개'],1,'삼각형은 변 3개와 꼭짓점 3개가 있어요.'],
 ['사각형의 변은 몇 개일까요?',['1개','3개','4개','5개'],2,'사각형은 곧은 변 4개로 둘러싸인 도형이에요.'],
 ['빨강, 파랑, 빨강, 파랑, __. 다음 색은?',['초록','노랑','파랑','빨강'],3,'빨강과 파랑이 번갈아 나오는 규칙이에요.'],
 ['2, 4, 6, 8, __. 다음 수는?',['10','9','12','16'],0,'2씩 커지는 규칙이에요.'],
 ['동그라미, 세모, 네모, 동그라미, 세모, __. 다음 모양은?',['동그라미','네모','세모','별'],1,'동그라미–세모–네모가 반복돼요.']]},
 measure:{subject:'math',name:'길이와 시간',icon:'📏',desc:'cm·m와 시간의 단위',lesson:'1 m는 100 cm, 1시간은 60분이에요. 길이나 시간을 비교할 때는 단위를 먼저 살펴보세요.',rows:[
 ['1 m는 몇 cm일까요?',['10 cm','100 cm','1000 cm','1 cm'],1,'1 m = 100 cm예요.'],
 ['1시간은 몇 분일까요?',['30분','100분','60분','10분'],2,'시계의 긴 바늘이 한 바퀴 돌면 60분, 즉 1시간이에요.'],
 ['2 m 30 cm는 몇 cm일까요?',['230 cm','203 cm','32 cm','2300 cm'],0,'2 m는 200 cm이므로 200 + 30 = 230 cm예요.'],
 ['오전 9시에서 1시간 뒤는?',['오전 8시','오후 9시','오전 11시','오전 10시'],3,'9시에 1시간을 더하면 오전 10시예요.'],
 ['다음 중 가장 긴 길이는?',['90 cm','1 m','80 cm','50 cm'],1,'1 m는 100 cm라서 90 cm보다 길어요.']]},
 datachart:{subject:'math',name:'자료와 표',icon:'📊',desc:'자료를 분류하고 비교해요',lesson:'조사한 결과를 표에 모으면 쉽게 비교할 수 있어요. 가장 많은 것, 가장 적은 것, 모두 몇 개인지 살펴보세요.',rows:[
 ['좋아하는 과일: 사과 5명, 배 3명, 포도 4명. 가장 많은 것은?',['사과','배','포도','모두 같음'],0,'5, 3, 4 중 5가 가장 커요.'],
 ['연필 4자루, 지우개 2개, 공책 3권. 가장 적은 것은?',['연필','지우개','공책','모두 같음'],1,'2가 가장 작으므로 지우개가 가장 적어요.'],
 ['빨간 공 3개, 파란 공 5개. 공은 모두 몇 개일까요?',['2개','5개','8개','15개'],2,'3 + 5 = 8개예요.'],
 ['토끼를 좋아하는 학생 6명, 고양이는 4명. 토끼가 몇 명 더 많나요?',['10명','4명','1명','2명'],3,'6 − 4 = 2명이에요.'],
 ['모양에 따라 분류할 때 같은 모임에 들어갈 것은?',['빨간 세모와 파란 세모','빨간 세모와 빨간 원','파란 원과 파란 네모','노란 세모와 노란 원'],0,'색이 달라도 모양이 같은 세모끼리 모아요.']]}
};
Object.entries(units).forEach(([k,u])=>{names[k]=u.name;icons[k]=u.icon});
const originalMake=make;
make=function(topic){let u=units[topic];if(!u?.rows)return originalMake(topic);let i=rand(0,u.rows.length-1),r=u.rows[i];return {topic,label:r[0],options:r[1],answer:r[2],hint:r[3],speech:r[4]||'',key:topic+':v1:'+i}};
const shuffle=a=>{let b=[...a];for(let i=b.length-1;i>0;i--){let j=rand(0,i);[b[i],b[j]]=[b[j],b[i]]}return b};
home=function(){let days=new Set(data.sessions.map(x=>x.day));let s=subjects[subject];app.innerHTML=`<section class="hero"><div class="eyebrow">SIYOON’S LEARNING GARDEN</div><h1>읽고, 말하고, 생각하며<br>매일 한 뼘씩 자라요.</h1><p>국어 · 영어 · 수학, 나만의 작은 배움정원.<br>하나를 배우고 다섯 문제로 연습해요.</p><div class="garden" aria-hidden="true"><span class="sun">☀</span><div class="stem"></div><div class="leaf"></div><div class="leaf right"></div><div class="pot"></div></div></section><section class="stats"><div class="stat"><strong>⭐ ${data.sessions.reduce((s,x)=>s+x.score,0)}</strong><span>모은 별</span></div><div class="stat"><strong>🌱 ${days.size}일</strong><span>함께 자란 날</span></div><div class="stat"><strong>${data.sessions.filter(x=>x.day===today()).length}번</strong><span>오늘의 도전</span></div></section><nav class="subjects" aria-label="과목 선택">${Object.entries(subjects).map(([k,v])=>`<button data-subject="${k}" aria-pressed="${subject===k}" class="subject ${subject===k?'selected':''}"><span>${v.icon}</span><b>${v.name}</b><small>${v.desc}</small></button>`).join('')}</nav><div class="sectionhead"><h2>${s.icon} ${s.name}의 씨앗을 심어요</h2><span>개념 읽기 → 5문제 → 다시 풀기</span></div><p class="curriculum-note">${subject==='en'?'영어는 정규 교과 시작 전, 2학년 눈높이의 기초 입문 활동이에요.':'초등 1~2학년군의 기초 학습 영역을 바탕으로 만든 자체 연습 콘텐츠예요.'}</p>${subject==='math'?'<div class="setting"><label for="level">연산·시계 난이도 </label><select id="level"><option value="basic">새싹 · 기초</option><option value="challenge">나무 · 도전</option></select></div>':''}<div class="cards">${Object.entries(units).filter(([,u])=>u.subject===subject).map(([k,u])=>`<button class="card" data-unit="${k}"><span class="icon">${u.icon}</span><h3>${u.name}</h3><p>${u.desc}</p><b>배우러 가기 ↗</b></button>`).join('')}</div><div class="review"><div><strong>🍃 한 번 더, 쑥쑥 자라요</strong><p>모든 과목에서 다시 연습할 문제 ${data.mistakes.length}개</p></div><button class="secondary" id="review" ${data.mistakes.length?'':'disabled'}>다시 풀기 →</button></div><details class="scope"><summary>보호자를 위한 학습 안내</summary><p>국어는 어휘·문장·읽기·의사소통, 수학은 수와 연산·도형·측정·규칙·자료를 연습합니다. 영어는 정규 초등 영어가 시작되기 전의 입문 과정입니다. 이 앱은 교과서 전체를 대체하거나 특정 출판사의 진도를 그대로 따르지 않습니다. 학교에서 배우는 순서와 아이의 수준에 맞춰 단원을 골라 주세요.</p></details>`;document.querySelectorAll('[data-subject]').forEach(b=>b.onclick=()=>{subject=b.dataset.subject;home()});document.querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>lesson(b.dataset.unit));$('#review').onclick=()=>start('review');if($('#level')){$('#level').value=data.level;$('#level').onchange=e=>{data.level=e.target.value;save()}}};
function lesson(topic){unit=topic;let u=units[topic];app.innerHTML=`<section class="panel lesson"><button class="back" id="back">← ${subjects[u.subject].name} 정원으로</button><div class="badge">${u.icon}</div><div class="eyebrow">먼저 배워요</div><h1>${u.name}</h1><div class="lesson-copy">${u.lesson}</div><p>시간 제한 없이, 한 번에 5문제씩 풀어요.</p><button class="primary" id="begin">연습 시작하기 →</button></section>`;$('#back').onclick=home;$('#begin').onclick=()=>start(topic)}
start=function(topic){review=topic==='review';if(review){queue=data.mistakes.slice(0,5).map(x=>({...x}));if(!queue.length)return home()}else if(units[topic]?.rows){queue=shuffle(units[topic].rows.map((r,i)=>({topic,label:r[0],options:r[1],answer:r[2],hint:r[3],speech:r[4]||'',key:topic+':v1:'+i}))).slice(0,5)}else{queue=[];while(queue.length<5){let q=make(topic);if(!queue.some(x=>x.key===q.key))queue.push(q)}}index=score=0;show()};
show=function(){answered=false;first=true;let q=queue[index];let opts;if(q.options)opts=shuffle(q.options.map((label,value)=>({label,value})));else{let nums=new Set([q.answer]);while(nums.size<4)nums.add(q.topic==='clock'?rand(1,12)*60+rand(0,11)*5:Math.max(0,q.answer+rand(-9,9)));opts=shuffle([...nums]).map(value=>({value,label:fmt(q,value)}))}app.innerHTML=`<section class="panel"><div class="quiztop"><button class="back" id="back">← 정원으로</button><b>${review?'다시 풀기':names[q.topic]} · ${index+1} / ${queue.length}</b></div><div class="progress"><div style="width:${index/queue.length*100}%"></div></div><p>${subjects[units[q.topic]?.subject||'math'].icon} 천천히 읽고 생각해 보세요.</p>${q.svg||''}<div class="question ${q.options?'text-question':''}">${q.label}</div>${q.speech?'<button class="secondary" id="listen">🔊 영어 듣기</button><p class="audio-note" aria-live="polite"></p>':''}<div class="options">${opts.map(o=>`<button class="option ${q.options?'text-option':''}" data-answer="${o.value}">${o.label}</button>`).join('')}</div><div class="feedback" aria-live="polite"></div><button class="primary next" id="next" hidden>다음 문제 →</button></section>`;$('#back').onclick=()=>{window.speechSynthesis?.cancel();home()};document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(Number(b.dataset.answer),b));$('#next').onclick=()=>{index++;index===queue.length?finish():show()};if($('#listen'))$('#listen').onclick=()=>{if(!('speechSynthesis' in window)){$('.audio-note').textContent='이 브라우저에서는 소리 듣기를 지원하지 않아요. 낱말을 읽고 연습해요.';return}speechSynthesis.cancel();let utterance=new SpeechSynthesisUtterance(q.speech);utterance.lang='en-US';utterance.rate=.75;utterance.onerror=()=>$('.audio-note')&&($('.audio-note').textContent='소리를 재생하지 못했어요. 낱말을 읽고 연습해요.');speechSynthesis.speak(utterance)}};
home();
