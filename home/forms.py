from django import forms

#def soma(num_1, num_2):
class NameForm(forms.Form):
    valor_1 = forms.IntegerField(label="valor_1") 
    valor_2 = forms.IntegerField(label="valor_2") 
