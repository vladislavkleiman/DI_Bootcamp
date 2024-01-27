from django.http import JsonResponse
from .models import Book

def list_books(request):
    books = Book.objects.all().values()
    return JsonResponse(list(books), safe=False)

def book_detail(request, id):
    book = Book.objects.get(id=id)
    return JsonResponse(book)


