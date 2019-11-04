from django.db import models

class descricao(models.Model):
	titulo = models.CharField(max_length=30)
	conteudo = models.CharField(max_length=300)
	
