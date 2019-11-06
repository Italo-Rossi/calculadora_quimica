from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from .forms import NameForm

context = {'NameForm':NameForm}

def home(request):
    print(request.method)
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        
        
        form = NameForm(request.POST)   #Dúvida: o objeto NameForme aceita um dicionário como parâmetro? 
        # check whether it's valid:
      
        if form.is_valid():
            
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return render (request, "resultado.html", {'form': form})
            
    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()


    return render(request, 'home.html', {'form': form})

def your_name(request):
    return render(request, "name.html")
