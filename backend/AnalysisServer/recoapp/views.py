from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import pymongo
from .recommend.content import cb
from .recommend.review import cf

# Create your views here.


@api_view(['GET'])
def index(request):
    user = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.users
    theme = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.theme
    review = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.review

    # 출력 확인용 코드
    # for r in themes:
    #     print(r)

    temp_id = 1
    temp_genre = '로맨스'

    # cb 코드
    # themes = theme.find()
    # results = cb(temp_genre, themes)

    # cf 코드
    themes = theme.find()
    reviews = review.find()

    # results = cf(id, temp_genre, reviews, themes)
    results = cf(temp_id, temp_genre, reviews, themes)

    context = {
        'results': results,
    }

    return render(request, 'recoapp/index.html', context)


@api_view(['GET'])
def CB(request):
    pass


@api_view(['GET'])
def CF(request, id, genre):
    print(genre)
    theme = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.theme
    review = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.review

    genre_name = ["스릴러", "로맨스", "추리", "SF/판타지",
                  "모험/액션", "코미디", "범죄", "공포", "19금", "감성/드라마"]

    if genre not in genre_name:
        return

    # temp_genre = '로맨스'
    themes = theme.find()
    reviews = review.find()
    results = cf(id, genre, reviews, themes)

    context = {
        'results': results,
    }
    return Response(results)


@api_view(['GET'])
def CF2(request, id, genre, gender, age):
    theme = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.theme
    review = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.review

    genre_name = ["스릴러", "로맨스", "추리", "SF/판타지",
                  "모험/액션", "코미디", "범죄", "공포", "19금", "감성/드라마"]

    if genre not in genre_name:
        return

    if gender not in ['남', '여']:
        return

    if age not in [10, 20, 30, 40]:
        return

    # temp_genre = '로맨스'
    themes = theme.find()
    reviews = review.find({"gender": gender, 'age': age})
    results = cf(id, genre, reviews, themes)

    context = {
        'results': results,
    }
    return Response(results)
