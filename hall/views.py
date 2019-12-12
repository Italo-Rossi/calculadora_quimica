from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

def concentracao_comum(request):
    return render(request, 'concentracao_comum.html')

def concentracao_molar(request):
    return render(request, 'concentracao_molar.html')

