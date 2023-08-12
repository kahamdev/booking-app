from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include("api.urls")),
    path('', TemplateView.as_view(template_name='index.html')),
]



admin.site.site_header = "TBS System Admin Panel"
admin.site.site_title="TBS System Admin"
admin.site.index_title="TBS System Admin Dashbord "
