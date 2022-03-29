from django.shortcuts import render
from rest_framework.decorators import api_view
import pymongo
from .recommend.content import cb
# Create your views here.


@api_view(['GET'])
def index(request):
    users = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.users
    theme = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.theme
    review = pymongo.MongoClient("j6c203.p.ssafy.io", 27017).escape.review
    
    result = theme.find()
    # for r in result:
    #     print(r)

    results = cb(result)
    context = {
        'results': results,
    }

    return render(request, 'recoapp/index.html', context)
