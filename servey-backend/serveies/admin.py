from django.contrib import admin

from .models import Admin, Servey, ServeyPublication, ServeyQuestion, ServeyQuestionAnswerItem

# Register your models here.
admin.site.register(Admin)
admin.site.register(Servey)
admin.site.register(ServeyPublication)
admin.site.register(ServeyQuestion)
admin.site.register(ServeyQuestionAnswerItem)
