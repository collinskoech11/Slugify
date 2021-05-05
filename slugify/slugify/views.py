from django.shortcuts import render

def slugify(request):
    context = {}

    return render(request, "index.html", context)