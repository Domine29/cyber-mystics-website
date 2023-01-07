from django.http import HttpResponse, JsonResponse
from .models import *
from rest_framework.decorators import api_view
# Create your views here.


@api_view(["GET", "POST"])
def dream_entries(request):
    if request.method == "POST":
        try:
            data = request.data
            description = data["params"]["description"]
            associations = data["params"]["association"]
            inner_dynamics = data["params"]["inner_dynamics"]
            interpretation = data["params"]["interpretation"]
            ritual = data["params"]["ritual"]

            new_image = DreamEntry(
                user=request.user,
                description=description, associations=associations, inner_dynamics=inner_dynamics, interpretation=interpretation, ritual=ritual)

            new_image.save(using='journaling')
            return JsonResponse({'success': True})

        except Exception as e:
            print(e)
            return HttpResponse(e)
