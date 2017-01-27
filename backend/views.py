from django.http import HttpResponse, JsonResponse
from django.template import RequestContext, loader


def index(request):
        template = loader.get_template('index.html')
        return HttpResponse(template.render())
