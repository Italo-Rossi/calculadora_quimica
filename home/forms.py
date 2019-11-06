from django import forms

#def soma(num_1, num_2):
class NameForm(forms.Form):
    tipo = forms.MultipleChoiceField
    valor_1 = forms.IntegerField(label="valor_1") 
    valor_2 = forms.IntegerField(label="valor_2")
    valor_4 = forms.IntegerField(label="valor_2")
    valor_2 = forms.IntegerField(label="valor_2")
    valor_2 = forms.IntegerField(label="valor_2")
    valor_2 = forms.IntegerField(label="valor_2")

class CountryForm(forms.Form):
    OPTIONS = (
        ("AUT", "Austria"),
        ("DEU", "Germany"),
        ("NLD", "Neitherlands"),
    )
    Countries = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple,
                                          choices=OPTIONS)