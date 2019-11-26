from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from .forms import NameForm
from .forms import CountryForm
#context = {'NameForm':NameForm}

def home(request):
    return render(request, 'home.html')

def concentracao_molar(request):
    print(request.method)
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        
        
        form = NameForm(request.POST)   #Dúvida: o objeto NameForme aceita um dicionário como parâmetro? 
        #form_2 = CountryForm(request.POST)
        # check whether it's valid:
        valor_1 = int(request.POST['valor_1'])
        valor_2 = int(request.POST['valor_2'])

        if form.is_valid():
            
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            soma = sum([valor_1,valor_2])

            contexto = {
                'form':form
            }
            return render (request, "resultado.html", contexto)
            
    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()
        #form_2 = CountryForm()

    return render(request, 'concentracao_molar.html', {'form': form})
