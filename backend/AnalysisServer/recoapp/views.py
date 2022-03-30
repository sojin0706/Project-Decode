from django.shortcuts import render
from rest_framework.decorators import api_view
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

    temp_genre = '로맨스'

    # cb 코드
    # themes = theme.find()
    # results = cb(temp_genre, themes)

    # cf 코드
    themes = theme.find()
    reviews = review.find()
    results = cf(temp_genre, reviews, themes)

    context = {
        'results': results,
    }

    return render(request, 'recoapp/index.html', context)


@api_view(['GET'])
def CB(request):
    pass


@api_view(['GET'])
def CF(request):
    pass
