"""calculadora_quimica URL Configuration
wom other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home.views import home as pag_inicial
from about.views import about as sobre_nos
from home.views import concentracao_molar as concentracao_molar
#from home.views import contact as contato
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pag_inicial, name='home_page'), #roteamento PARA A ABA HOME OBS
    path('sobre_nos', sobre_nos, name='sobre_nos' ), 
    path('concentracao_molar', concentracao_molar, name='concentracao_molar'),
    # path('contato', contato, name='aba_para_contato'),
]
