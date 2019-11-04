"""calculadora_quimica URL Configuration
wom other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home.views import index as pag_inicial

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pag_inicial), #LINK PARA A ABA HOME OBS: Posteriormente podemos organizar melhor a disposição de cada função
    #path('sobre_nos', ),
]
