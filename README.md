## 프로젝트 주제 : project_python_machineLearing
python flask framework와 machineLearning을 활용한....


## 기술 스택
**서버** -  
**클라이언트** -  
**데이터베이스** -  
**머신러닝 API** -  
python , flask , 
sklearn

## 구현 방법
머신러닝 - 코랩을 이용해 계산후 json 형태로 서버에


<img src="https://github.com/kimYHgit/project_python_machineLearing/assets/130536070/7028a464-b98c-4553-af90-a1343733269c" width="700" height="300"/>   

## 개념  
Flask  
 - 파이썬 웹 프레임워크
 - 마이크로 프레임워크 , 기본적인 도구와 기능만을 제공하며 개발자가 필요한 다양한 확장 기능들을 선택적으로 추가하여 사용할 수 있도록 함.




## 참고
1. 마크다운 작성 - https://gist.github.com/ihoneymon/652be052a0727ad59601
2. 머신러닝 개요 - https://modulabs.co.kr/blog/machine-learning/
3. flask - https://flask-docs-kr.readthedocs.io/ko/latest/index.html
4. mongoose 사용법 - https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
5. mongoose document 조작(조회 등) - https://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
6. 리액트_모달 시멘틱 컴포넌트 - https://react.semantic-ui.com/modules/modal/#content-content-image
7. Dog-Breed-Classification-Project-Using-Flask - https://github.com/prateeksawhney97/Dog-Breed-Classification-Project-Using-Flask/tree/74a59173e0d312ba21e90888ae52e99827116185#step6
8. 강아지 데이터셋 - https://www.kaggle.com/c/dog-breed-identification/data?select=test
9. 캐글 데이터셋 받기 - https://www.youtube.com/watch?v=I7IYpZRLSks
10. How to easily build a Dog breed Image classification model - https://medium.com/nanonets/how-to-easily-build-a-dog-breed-image-classification-model-2fd214419cde
11. ML 코랩 - https://colab.research.google.com/drive/1u0ae-szvtfIHuUPq_CGheyVb9rhjAKZm?hl=ko#scrollTo=aVh7Q8dEbfVq
12. 딥러닝 웹서비스 개발 참고 글- https://medium.com/@inerplat/%EB%94%A5%EB%9F%AC%EB%8B%9D-%EC%9B%B9%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C-%EB%8F%84%EC%A0%84%EA%B8%B0-e9ca38d53c1b
## Flask 서버  
**코드참고** - https://www.fun-coding.org/post/flask_basic-2.html#gsc.tab=0

1. 서버 생성 , 라우팅 , json data get 요청
```python
from flask import Flask , jsonify

app = Flask(__name__)


@app.route("/")
def hello():                           
    return "<h1>Hello World!</h1>"

@app.route("/hello")
def hello_flask():
    return "<h1>Hello Flash!</h1>"

@app.route("/first")
def hello_first():
    return "<h3>Hello First</h3>"


@app.route('/json_test')
def hello_json():
    data = {'name' : 'Aaron', 'family' : 'Byun'}
    return jsonify(data)

@app.route('/server_info')
def server_json():
    data = { 'server_name' : '0.0.0.0', 'server_port' : '8080' }
    return jsonify(data)



if __name__ == '__main__':
    app.debug = True
    host_addr ="localhost"
    port =8001
    app.run(host=host_addr, port=port)

```



2. 
 
