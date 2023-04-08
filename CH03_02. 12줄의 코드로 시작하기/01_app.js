

// 🟦 해커뉴스 데이터를 가져오기 
    // XMLHttpRequest 객체를 ajax 에 저장하기 
        const ajax = new XMLHttpRequest();
            // [공식 문서의 중요성]
                // https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest
                // XMLHttpRequest 로 검색해서 들어가보면, 공식문서가 있음. 
                // 이것들을 따라치면서, 공부할 수 있어 ⭐⭐⭐⭐⭐⭐ 

    // 🔷 URL 주소는 변경될 수 있기 때문에, 변수로 바꿀 수 있는 부분을 바꾸기 
        const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'

    // 연결?
        ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false)
            // [해석]
                // 세번째 인자 false : 가져오는 걸, 동기적으로 처리하겠다. 라는 의미. 

    // 실제로 데이터를 가져오는 순간.
        ajax.send()

    // 가져온 데이터 보기 
        console.log(ajax.response);
            // ⭐⭐ input 이 들어온 순간




// 🟦 입력데이터를 처리하는 과정 
    // '가져온 데이터를 어떻게 다루지?' 의 관점 

    // 개발자 도구 > network 탭 > XHR 
        // XMLHttpRequest 기능으로 가져온 데이터만 볼 수 있는 탭 
        // XHR = XMLHttpRequest 의 약자
        
    // 응답값(response) 으로 온 것을 '객체' 로 변환시킬 것 임. 
        // 객체로 변환 시켜야 하는 이유 ❓❓❓  
            // 1. 좀 더 보기 편함 
            // 2. 객체지향프로그래밍? 
        
    // 🔷 response 로 받은 값이 JSON 형식이면 -> 객체로 편하게 변환이 됨.⭐⭐ 
        // JSON 형식이 아니면, 객체로 변환하는게 좀 힘들수도
        
        // JSON 형식의 response 데이터를 > 객체로 변환
        const newsFeed = JSON.parse(ajax.response)

        const ul = document.createElement('ul');

        console.log(newsFeed)

        // document.getElementById('root').innerHTML = `<ul> 
        //                                                 <li>${newsFeed[0].title} </li>
        //                                                 <li>${newsFeed[1].title} </li>
        //                                                 <li>${newsFeed[2].title} </li>
        //                                             </ul>`

    // 🔷 [코드 최적화] 
        // 궁금증
            // 이걸 리팩토링 이라고 하나❓❓❓❓❓ 
        // 필요성 
            // 하드코딩이 되어 있음 
        // 하드코딩의 문제점 
            // 1. 손으로 기입했을 때 오류. 없는 데이터에 접근하게 될 수도
            // 2. 업데이트 된 값을 매번 받아올 수 없음. 
        // 해결방안 
            // ⭐⭐'반복패턴'⭐⭐ 을 찾고 -> 반복문으로 돌린다. ⭐⭐⭐ 

        // 반복문 활용 📛📛📛📛📛 (이거 혼자 못 짰을거 같음)
            for (let i = 0; i < 10; i++) {
                
                const li = document.createElement('li');

                li.innerHTML = newsFeed[i].title;

                ul.appendChild(li);
            }
                // 시작값 : 몇 번 반복할거니? 
                // 종료값 : 언제 까지 변화 할거니? 
                // 값 변화 : 세 번째 영역 ex) ⭐⭐중괄호 안의 영역이 끝나면⭐⭐ > 세 번째 영역이 작동함


            document.getElementById('root').appendChild(ul);


    // 🔷 시사점 
        // 1. 이 과정이 미니멀 버전임. , 
        // 2. 이후에, 입력데이터가 더 많아지거나, 처리과정이 더 복잡해지거나, 출력과정이 많고, 복잡해짐. 

