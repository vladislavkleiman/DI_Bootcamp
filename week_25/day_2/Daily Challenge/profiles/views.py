from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Profile

@csrf_exempt
def create_profile(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        Profile.objects.create(name=name, email=email)
        return JsonResponse({'message': 'Profile created successfully'})

def delete_profile(request, id):
    profile = Profile.objects.get(id=id)
    profile.delete()
    return JsonResponse({'message': 'Profile deleted successfully'})
