"""calculadora_quimica URL Configuration
wom other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from hall.views import home as pag_inicial
from hall.views import concentracao_comum
from hall.views import concentracao_molar
from about.views import about as sobre_nos
from diluicao.views import diluicao


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pag_inicial, name='home_page'), #roteamento PARA A ABA HOME OBS
    path('sobre_nos', sobre_nos, name='sobre_nos' ), 
    path('concentracao_molar', concentracao_molar, name='concentracao_molar'),
    path('diluicao', diluicao, name='diluicao'),
    path('concentracao-comum', concentracao_comum, name='concentracao_comum'),
]
